import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Master auhentification",
  description: "Authentification",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
