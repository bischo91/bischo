import { GoogleGenerativeAI } from '@google/generative-ai';
import { PRIVATE_VITE_GEMINI_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';
import { buildContext } from '$lib/server/context';
import { json } from '@sveltejs/kit';
import { checkRateLimit } from '$lib/server/rateLimiter';

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
		const { message, conversationHistory } = await request.json();

		if (!message || typeof message !== 'string') {
			return json({ error: 'Message is required' }, { status: 400 });
		}

		if (!PRIVATE_VITE_GEMINI_API_KEY) {
			return json({ error: 'API key not configured' }, { status: 500 });
		}

		const genAI = new GoogleGenerativeAI(PRIVATE_VITE_GEMINI_API_KEY);
		const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

		const systemContext = await buildContext();

		let history = (conversationHistory || [])
			.filter(
				(msg: { role: string; content: string }) =>
					msg.role !== 'model' ||
					msg.content !==
						'Hello! I am Brian Cho, an enthusiastic developer and an engineer. How can I help you learn more about Brian?'
			)
			.map((msg: { role: string; content: string }) => ({
				role: msg.role === 'user' ? 'user' : 'model',
				parts: [{ text: msg.content }]
			}));

		let messageToSend = message;
		if (history.length === 0) {
			messageToSend = `${systemContext}\n\nNow, please answer the following question: ${message}`;
		}

		const chat =
			history.length > 0 && history[0].role === 'user'
				? model.startChat({
						history: history
					})
				: model.startChat();

		const result = await chat.sendMessage(messageToSend);
		const response = await result.response;
		const text = response.text();

		return json(
			{ response: text },
			{
				headers: {
					'X-RateLimit-Limit': '10',
					'X-RateLimit-Remaining': rateLimit.remaining.toString(),
					'X-RateLimit-Reset': rateLimit.resetAt.toString()
				}
			}
		);
	} catch (error) {
		console.error('Error in Gemini API:', error);
		return json(
			{ error: error instanceof Error ? error.message : 'An error occurred' },
			{ status: 500 }
		);
	}
};
