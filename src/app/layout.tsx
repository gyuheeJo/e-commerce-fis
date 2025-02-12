import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { ViewTransitions } from "next-view-transitions";
import "../assets/globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/components/auth/authContext";
export const metadata: Metadata = {
  title: "E-commerce FIS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <NextUIProvider>
          <AuthProvider>
            {children}
            </AuthProvider>
            <Toaster />
          </NextUIProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
