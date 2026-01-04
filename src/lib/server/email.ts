import { PRIVATE_VITE_RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

export const sendEmail = async (params: {
	to: string;
	from: string;
	subject: string;
	html: string;
	replyTo?: string;
}) => {
	if (!PRIVATE_VITE_RESEND_API_KEY) {
		throw new Error('Resend API key not configured');
	}

	const resend = new Resend(PRIVATE_VITE_RESEND_API_KEY);
	return await resend.emails.send(params);
};
