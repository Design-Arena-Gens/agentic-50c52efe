import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Привет | Agentic Greeting",
  description: "Лаконичное приветствие и добро пожаловать на новую страницу",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Привет | Agentic Greeting",
    description: "Добро пожаловать на свежесозданную страницу приветствия",
    url: "https://agentic-50c52efe.vercel.app",
    siteName: "Agentic Greeting",
    locale: "ru_RU",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
