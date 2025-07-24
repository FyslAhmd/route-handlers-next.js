import { cookies, headers } from "next/headers";

export async function GET(req) {
  // const reqHeaders = new Headers(req.headers);
  // console.log(reqHeaders.get("Authorization"));
  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = req.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set("resultPerPage", "20");
  console.log(cookieStore.get("resultPerPage"));

  return new Response("<h1>Profile Api</h1>", {
    headers: { "content-type": "text/html", "set-cookie": "theme=dark" },
  });
}
