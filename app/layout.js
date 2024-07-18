import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}
suppressHydrationWarning={true}>
          <Header />
          <mail>{children}</mail>
          <Footer />
        </body>
      </html>
    </ClerkProvider>

  );
}
