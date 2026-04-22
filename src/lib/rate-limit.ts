/**
 * In-memory IP-based rate limiter.
 * Tracks submissions per IP with a sliding window.
 * No external dependencies — uses a simple Map.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number; // Unix timestamp in ms
}

const store = new Map<string, RateLimitEntry>();

// Configuration
const MAX_REQUESTS = 3;        // max submissions per window
const WINDOW_MS = 15 * 60 * 1000; // 15-minute window
const CLEANUP_INTERVAL = 5 * 60 * 1000; // clean expired entries every 5 min

// Periodic cleanup to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetTime) {
      store.delete(key);
    }
  }
}, CLEANUP_INTERVAL);

/**
 * Check and consume a rate limit token for the given identifier (IP address).
 * Returns { success, remaining, retryAfterSeconds }.
 */
export function rateLimit(identifier: string): {
  success: boolean;
  remaining: number;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const entry = store.get(identifier);

  // First request or expired window → reset
  if (!entry || now > entry.resetTime) {
    store.set(identifier, {
      count: 1,
      resetTime: now + WINDOW_MS,
    });
    return { success: true, remaining: MAX_REQUESTS - 1, retryAfterSeconds: 0 };
  }

  // Within window and under limit
  if (entry.count < MAX_REQUESTS) {
    entry.count++;
    return { success: true, remaining: MAX_REQUESTS - entry.count, retryAfterSeconds: 0 };
  }

  // Rate limited
  const retryAfterSeconds = Math.ceil((entry.resetTime - now) / 1000);
  return { success: false, remaining: 0, retryAfterSeconds };
}
