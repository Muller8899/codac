import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Codashop Taiwan - 購買遊戲代幣最簡單快捷的方式",
  description: "使用台灣最方便快速的支付方式購買應用APP、遊戲商品、憑證。保證立即發貨. Instant & guaranteed delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <ClientBody>
        <div className="flex min-h-screen flex-col bg-codaPurple">
          {children}
        </div>
      </ClientBody>
    </html>
  );
}
