// import localFont from "next/font/local";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Zoho eisenhover guide",
  description: "Free user guide for eisenhover matrix by Digismiths Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-[100%] m-0 p-0 overflow-x-hidden">
      <body className="w-[100%] m-0 p-0  h-auto overflow-x-hidden">

        <Navbar/>

        <div className="mt-32">
        {children}
        </div>

        <Footer/>

      </body>
    </html>
  );
}
