import "./globals.css";

export const metadata = {
  title: "App de Ufs",
  description: "Meu App de UFs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" >
    <body >
     { children }
    </body >
  </html >
  );
}