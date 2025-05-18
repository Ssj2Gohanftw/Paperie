import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@/lib/session";
import { verifyUser } from "@/lib/db";   // your user lookup + password check

async function loginRoute(req, res) {
  const { email, password } = await req.body;
  const user = await verifyUser(email, password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  // store minimal info in session
  req.session.user = { id: user.id, role: user.role };
  await req.session.save();
  res.status(200).json({ ok: true });
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
