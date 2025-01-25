import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import Footer from "@/components/footer";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: {
    template: "%s | Prostore",
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex h-screen flex-col"
      suppressHydrationWarning
      suppressContentEditableWarning>
      <Header />
      <main className="flex-1 wrappefr">{children}</main>
      <Footer />
    </div>
  );
}
