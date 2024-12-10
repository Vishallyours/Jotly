import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jotly",
  description: "The connected workspace where better,faster work happens",
icons:{
  icon: [
    {
    media:"(prefers-color-scheme: light)",
    url:"public/light-jotly-logo.png",
    href:"public/light-jotly-logo.png"
  },
    {
    media:"(prefers-color-scheme: dark)",
    url:"/dark-jotly-logo.png",
    href:"/dark-jotly-logo.png"
  },
]
}
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
