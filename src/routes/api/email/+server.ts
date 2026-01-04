import { PRIVATE_VITE_RESEND_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { checkRateLimit } from '$lib/server/rateLimiter';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const rateLimit = checkRateLimit(request);
	if (!rateLimit.allowed) {
		const resetDate = new Date(rateLimit.resetAt);
		return json(
			{
				error: 'Rate limit exceeded',
				message: `You have exceeded the maximum number of requests. Please try again after ${resetDate.toLocaleTimeString()}.`
			},
			{
				status: 429,
				headers: {
					'X-RateLimit-Limit': '10',
					'X-RateLimit-Remaining': '0',
					'X-RateLimit-Reset': rateLimit.resetAt.toString(),
					'Retry-After': Math.ceil((rateLimit.resetAt - Date.now()) / 1000).toString()
				}
			}
		);
	}

	try {
		const { name, email, subject, message } = await request.json();

		if (!name || !email || !subject || !message) {
			return json(
				{ error: 'All fields are required: name, email, subject, message' },
				{ status: 400 }
			);
		}

		if (!PRIVATE_VITE_RESEND_API_KEY) {
			return json({ error: 'Email service not configured' }, { status: 500 });
		}

		const resend = new Resend(PRIVATE_VITE_RESEND_API_KEY);

		const { data, error } = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'bischo91@gmail.com',
			replyTo: email,
			subject: `${subject} - brian-cho.web.app`,
			html: `
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Subject:</strong> ${subject}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`
		});

		if (error) {
			console.error('Resend error:', error);
			return json({ error: 'Failed to send email', details: error }, { status: 500 });
		}

		return json(
			{ success: true, messageId: data?.id },
			{
				headers: {
					'X-RateLimit-Limit': '10',
					'X-RateLimit-Remaining': rateLimit.remaining.toString(),
					'X-RateLimit-Reset': rateLimit.resetAt.toString()
				}
			}
		);
	} catch (error) {
		console.error('Error in email API:', error);
		return json(
			{ error: error instanceof Error ? error.message : 'An error occurred' },
			{ status: 500 }
		);
	}
};
