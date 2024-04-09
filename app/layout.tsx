import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Text lorem ipsum",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full justify-center">
        <div className="flex flex-col w-full items-center w-full prose-lg text-center px-[30px]">
          <h1 className="mt-5">Text lorem ipsum</h1>
          <p className="mt-1 lg:max-w-screen-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            cupiditate autem aliquid fugiat voluptate laboriosam impedit. Quas
            quae dolores cum.
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
