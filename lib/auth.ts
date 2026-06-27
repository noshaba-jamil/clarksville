 import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CryptoJS from "crypto-js";

const COOKIE = "wdr_admin_session";

function getSecret(): string {
  return process.env.AUTH_SALT || "fallback-change-in-production-32chars";
}

export function hashPassword(password: string): string {
  return CryptoJS.HmacSHA256(password, getSecret()).toString();
}

export function generateSessionToken(password: string): string {
  const day = Math.floor(Date.now() / 86400000).toString();
  const hash = hashPassword(password);
  return CryptoJS.HmacSHA256(hash + day, getSecret()).toString();
}

export function verifySessionToken(token: string): boolean {
  const secret = getSecret();
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !token) return false;

  for (let i = 0; i <= 1; i++) {
    const day = Math.floor((Date.now() - i * 86400000) / 86400000).toString();
    const hash = hashPassword(adminPassword);
    const expected = CryptoJS.HmacSHA256(hash + day, secret).toString();
    if (token === expected) return true;
  }
  return false;
}

export async function verifyAdminAuth(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(COOKIE);
    if (!session?.value) return false;
    return verifySessionToken(session.value);
  } catch {
    return false;
  }
}

export async function requireAdminAuth(): Promise<void> {
  const isAuthed = await verifyAdminAuth();
  if (!isAuthed) redirect("/admin");
}

export function validatePassword(input: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  const a = hashPassword(input);
  const b = hashPassword(adminPassword);
  return a === b;
}

export { COOKIE };
