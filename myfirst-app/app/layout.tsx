import type { Metadata } from "next";
import "../app/styles/global.css";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading.."
  },
  description: "The best moves on the best framework",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
