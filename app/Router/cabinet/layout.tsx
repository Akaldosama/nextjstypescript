import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cabinet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="flex">
            <div>
              <aside className="bg-[#fff] px-3 py-4 w-[200px] h-[100vh]">
                <ul className="flex flex-wrap text-start text-3xl">
                  <Link href='/Router/cabinet/dashboard' className="w-[150px] my-3">Dashboard</Link>
                  <Link href='/Router/cabinet/settings' className="w-[150px] my-3">Settings</Link>
                </ul>
              </aside>
            </div>
            <div>
              {children}
            </div>
          </main>
      </body>
    </html>
  );
}
