import { Inter } from "next/font/google";
import "./globals.css";
import NavbarForUser, { NavbarForAnonymousUser } from "./ui/navbar";
import { getSessionUser } from "./lib/sessions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiny Tiny URL",
  description: "Tiny tiny url clone",
};

export default async function RootLayout({ children }) {
  const user = await getSessionUser();
  const isUserLoggedIn = user !== null;
  const Navbar = isUserLoggedIn ? <NavbarForUser /> : <NavbarForAnonymousUser />;
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen px-10`}>
        {Navbar}
        {children}
      </body>
    </html>
  );
}
