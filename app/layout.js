import {Montserrat} from "next/font/google";
import "./globals.css";
import SidebarMenu from "./components/SidebarMenu";
import Navbar from "./components/Navbar";
import React from "react";


export const metadata = {
  title: "Veliciae Admin",
  description: "Veliciae is a jewelry store management system",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <React.StrictMode>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={montserrat.className}>
   
            <div className="flex">
              <SidebarMenu />
              <div className="ml-[18%] w-[82vw] flex flex-col">
                <Navbar/>
                {children}
              </div>
            </div>
    
        </body>
      </html>
    </React.StrictMode>
  );
}
