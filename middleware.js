import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/signin") && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  if (!isLoggedIn && pathname !== "/signin") {
    return NextResponse.redirect(new URL("/signin", req.url))
  }
})

export const config = {
  matcher: ["/products-list", "/products-list/:path*", 
    "/products/:path*",'/add-products/:path*','/orders/:path*','/orders-details/:path*'],
}
