import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    template: "%s | Prostore",
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex-center min-h-screen w-full"
      suppressHydrationWarning
      suppressContentEditableWarning>
      {children}
    </div>
  );
}
