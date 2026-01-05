import { redirect } from "next/navigation";

async function isUserLoggedIn() {
  return true;
}

export default async function IndexPage() {
  const loggedIn = await isUserLoggedIn();

  if (loggedIn) {
    redirect("/home");
  } else {
    redirect("/login");
  }

  return null;
}
