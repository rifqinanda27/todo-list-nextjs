import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ui/Toaster";

const font = Montserrat({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Aplikasi To Do List",
  description: "Aplikasi Untuk mengatur kegiatanmu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
