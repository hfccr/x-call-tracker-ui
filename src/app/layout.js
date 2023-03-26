"use client";
import "./globals.css";
import "@fontsource/lacquer";
import { WagmiConfig } from "wagmi";
import { client } from "./../utils/chain";
import { Toaster } from "react-hot-toast";
import { PolybaseProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { defaultNamespace } from "./../constants/polybase";
import { brandingDarkTheme } from "./../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Header from "@/components/Header";

const polybase = new Polybase({ defaultNamespace });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={brandingDarkTheme}>
          <WagmiConfig client={client}>
            <Header />
            {children}
          </WagmiConfig>
          <PolybaseProvider>
            <Toaster
              toastOptions={{
                className: "",
                style: {
                  fontFamily: "Lacquer",
                },
              }}
            />
          </PolybaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
