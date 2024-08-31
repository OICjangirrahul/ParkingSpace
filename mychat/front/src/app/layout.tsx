import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from 'next/font/google'
import SessionProvider from "@/providers/SessionProvider";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "My Chat App",
  description: "To chatting quick as passible withot any login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
      <body 
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable)}>{children}</body>
        </SessionProvider>
    </html>
  );
}
