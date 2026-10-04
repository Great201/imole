import { redirect } from "next/navigation";

// Always send traffic to /home; the Shell there does the real token check and
// bounces to /login when there is none.
//
// This cannot branch on auth itself: it's a server component, and the token
// lives in localStorage where the server can't see it. The previous
// `isUserLoggedIn()` stub returned a hardcoded `true`, which made the branch
// decorative anyway.
export default function IndexPage() {
  redirect("/home");
}
