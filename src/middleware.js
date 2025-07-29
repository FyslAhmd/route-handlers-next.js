import { NextResponse } from "next/server";

export function middleware(req) {
  const response = NextResponse.next();
  const themePreference = req.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;

  //   return NextResponse.redirect(new URL("/", req.url));
  //   if (req.nextUrl.pathname === "/profile") {
  //     // return NextResponse.redirect(new URL("/hello", req.nextUrl));
  //     return NextResponse.rewrite(new URL("/hello", req.nextUrl));
  //   }
}

// export const config = {
//   matcher: "/profile",
// };
