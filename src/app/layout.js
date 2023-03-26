import "./globals.css";
import "@fontsource/lacquer";

export const metadata = {
  title: "x call tracker",
  description: "Scaling Ethereum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
