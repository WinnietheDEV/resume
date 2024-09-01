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
            <div className="icon-container" aria-label="link to home page">
              <i className="fa-solid fa-house" aria-label="home icon"></i>
              <p>Home</p>
            </div>
          </Link>
          <Link href={"/project"}>
            <div className="icon-container" aria-label="link to project page">
              <i className="fa-solid fa-code" aria-label="project icon"></i>
              <p>Project</p>
            </div>
          </Link>
          <Link href={"/contact"}>
            <div className="icon-container" aria-label="link to contact page">
              <i className="fa-solid fa-envelope" aria-label="contact icon"></i>
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
