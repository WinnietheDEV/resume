import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nawin's Website",
  description: "A website for knowing more about Win.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-container-column position-absolute-center fade-in-left menu-container">
          <Link href={"/"}>
            <div className="icon-container">
              <i class="fa-solid fa-house"></i>
              <p>Home</p>
            </div>
          </Link>
          <Link href={"/project"}>
            <div className="icon-container">
              <i class="fa-solid fa-code"></i>
              <p>Project</p>
            </div>
          </Link>
          <Link href={"/contact"}>
            <div className="icon-container">
              <i class="fa-solid fa-envelope"></i>
              <p>Contact</p>
            </div>
          </Link>
        </div>
        {children}
        <script
          src="https://kit.fontawesome.com/b4ab673a4a.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
