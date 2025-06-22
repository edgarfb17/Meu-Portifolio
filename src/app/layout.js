
import "./globals.css";


export const metadata = {
  title: "Edgar Bataglini",
  description: "Meu Portifolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" type="image/png" href="./favicon.ico"></link>
      </head>
      <body className="body">
        {children}
      </body>
    </html>
  );
}
