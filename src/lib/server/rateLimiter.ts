interface RateLimitEntry {
	count: number;
	windowStart: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const MAX_REQUESTS_PER_WINDOW = 10; // Maximum requests allowed
const WINDOW_DURATION_MS = 60 * 60 * 1000;
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

const getClientIP = (request: Request): string => {
	const forwarded = request.headers.get('x-forwarded-for');
	if (forwarded) {
		return forwarded.split(',')[0].trim();
	}

	const realIP = request.headers.get('x-real-ip');
	if (realIP) {
		return realIP;
	}

	return 'unknown';
};

/**
 * Check if an IP has exceeded the rate limit
 * @returns { allowed: boolean, remaining: number, resetAt: number }
 */
export const checkRateLimit = (
	request: Request
): {
	allowed: boolean;
	remaining: number;
	resetAt: number;
} => {
	const clientIP = getClientIP(request);
	const now = Date.now();
	let entry = rateLimitStore.get(clientIP);

	if (!entry || now - entry.windowStart >= WINDOW_DURATION_MS) {
		entry = {
			count: 0,
			windowStart: now
		};
		rateLimitStore.set(clientIP, entry);
	}

	const allowed = entry.count < MAX_REQUESTS_PER_WINDOW;
	const remaining = Math.max(0, MAX_REQUESTS_PER_WINDOW - entry.count - 1);
	const resetAt = entry.windowStart + WINDOW_DURATION_MS;

	if (allowed) {
		entry.count++;
	}

	return { allowed, remaining, resetAt };
};

const cleanupOldEntries = () => {
	const now = Date.now();
	for (const [ip, entry] of rateLimitStore.entries()) {
		if (now - entry.windowStart >= WINDOW_DURATION_MS) {
			rateLimitStore.delete(ip);
		}
	}
};

if (typeof setInterval !== 'undefined') {
	setInterval(cleanupOldEntries, CLEANUP_INTERVAL_MS);
}
