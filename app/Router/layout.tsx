import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Router",
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
                <Link href='/Router/products' className="w-[150px] my-3">Products</Link>
                <Link href='/Router/cabinet' className="w-[150px]">Cabinet</Link>
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
