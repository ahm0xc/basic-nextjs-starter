import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Basic Nextjs Starter",
  description: "Basic Nextjs Starter",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
