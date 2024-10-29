import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Wallet App",
  description: "Wallet App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
