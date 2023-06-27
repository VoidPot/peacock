import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getIsAdmin(request: Request): Promise<Boolean> {
  const session = await getSession(request);
  const isAdmin = session.get("IS_ADMIN");
  return Boolean(isAdmin);
}

export async function requireAdmin(request: Request) {
  const isAdmin = await getIsAdmin(request);
  if (isAdmin) return isAdmin;
  throw await logout(request);
}

export async function login(request: Request) {
  const session = await getSession(request);
  session.set("IS_ADMIN", true);
  return redirect("/home", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: 60 * 60,
      }),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect("/home", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
