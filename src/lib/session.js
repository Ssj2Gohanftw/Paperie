// lib/session.js
import { IronSessionOptions } from "iron-session";

export const sessionOptions = {
  password: process.env.SESSION_PASSWORD, // strong, 32+ char random string
  cookieName: "paperie_session", // your cookie name
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
