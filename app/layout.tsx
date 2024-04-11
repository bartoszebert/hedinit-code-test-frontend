import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Text lorem ipsum",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="flex flex-col w-full justify-center">
        <div className="flex flex-col items-center w-full text-center px-[30px]">
          <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl">Text lorem ipsum</h1>
          <p className="mt-3 lg:max-w-screen-md lg:text-xl font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            cupiditate autem aliquid fugiat voluptate laboriosam impedit. Quas
            quae dolores cum.
          </p>
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
