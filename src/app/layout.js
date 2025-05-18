import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Edgar Fernandes",
  description: "Meu Portifolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="body">
        {children}
      </body>
    </html>
  );
}
