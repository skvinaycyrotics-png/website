import { SignJWT, jwtVerify } from 'jose';
import { NextRequest } from 'next/server';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'super-secret-development-key';
const encodedKey = new TextEncoder().encode(JWT_SECRET_KEY);

interface SessionPayload {
  userId: string;
  email: string;
  role: string;
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload as any)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d') // 1 day expiration
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload as unknown as SessionPayload;
  } catch (error) {
    return null; // Invalid token
  }
}

/**
 * Extracts and verifies the JWT token from the Authorization header or cookies.
 */
export async function getSession(request: NextRequest) {
  // 1. Check Bearer token
  const authHeader = request.headers.get('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    const payload = await decrypt(token);
    if (payload) return payload;
  }

  // 2. Check cookies
  const sessionCookie = request.cookies.get('auth_session')?.value;
  if (sessionCookie) {
    const payload = await decrypt(sessionCookie);
    if (payload) return payload;
  }

  return null;
}
