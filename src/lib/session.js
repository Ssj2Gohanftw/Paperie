export const sessionOptions = {
  password: process.env.SESSION_PASSWORD, // strong, 32+ char random string
  cookieName: "paperie_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  },
};
