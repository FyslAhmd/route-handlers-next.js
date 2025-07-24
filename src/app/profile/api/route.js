import { headers } from "next/headers";

export async function GET(req) {
  // const reqHeaders = new Headers(req.headers);
  // console.log(reqHeaders.get("Authorization"));
  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Profile Api</h1>", {
    headers: { "content-type": "text/html" },
  });
}
