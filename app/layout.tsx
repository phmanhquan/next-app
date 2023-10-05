import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import NavBar from "./NavBar";
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./auth/Provider";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = localFont({
  src: "../public/fonts/Poppins-Thin.ttf",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: "...",
    description: "...",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={poppins.variable}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
