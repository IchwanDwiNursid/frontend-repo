"use client";

import { Inter } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Navbar from "@/component/Navbar/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
const disaleNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>FrontEnd Repo</title>
      </head>
      <body>
        <ThemeRegistry>
          <header>{!disaleNavbar.includes(pathname) && <Navbar />}</header>
          <body className={inter.className}>{children}</body>
        </ThemeRegistry>
      </body>
    </html>
  );
}
