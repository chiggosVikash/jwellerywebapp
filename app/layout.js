import { Raleway, Inter,} from "next/font/google";
import "./globals.css";
import SidebarMenu from "./Components/SidebarMenu";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const raleway = Raleway({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="flex justify-end">
         <SidebarMenu />
         <div className="2xl:w-[83%] xl:w-[80%] w-[75%] flex flex-col">
         <Navbar/>
         {children}
         </div>
        </div>
        
        </body>
    </html>
  );
}
