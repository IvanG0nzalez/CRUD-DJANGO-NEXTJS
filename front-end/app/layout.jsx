import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MOVIES CRUD</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" async />
      </head>
      <body>
        <Menu/>
        <div>{children}</div>
      </body>
    </html>
  );
}
