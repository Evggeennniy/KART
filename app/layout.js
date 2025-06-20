import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../shared/footer/Footer";
import Header from "../shared/nav-section/Header";
import AppProvider from "../shared/app-provider/AppProvide";



const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // ✅ Add the weights you need
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaSans.variable}>
      <body className={`min-h-screen flex flex-col   bg-[#F5F5F5CC]`}>

        <AppProvider >
          <div id="modal" />
          <Header />

          <main className="flex-grow container pt-[90px]! xl:pt-[160px]! ">
            {children}
          </main>
          {/* <div className="container"> */}

          <Footer />
          {/* </div> */}
        </AppProvider>
      </body>
    </html>
  );
}
