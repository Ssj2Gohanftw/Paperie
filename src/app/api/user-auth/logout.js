// pages/api/auth/logout.js
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@/lib/session";

async function logoutRoute(req, res) {
  req.session.destroy();
  res.status(200).json({ ok: true });
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
