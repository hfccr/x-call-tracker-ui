"use client";
import "./globals.css";
import { PolybaseProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { defaultNamespace } from "./../constants/polybase";
import "@fontsource/lacquer";

const polybase = new Polybase({ defaultNamespace });

export const metadata = {
  title: "x call tracker",
  description: "Scaling Ethereum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PolybaseProvider polybase={polybase}>{children}</PolybaseProvider>
      </body>
    </html>
  );
}
