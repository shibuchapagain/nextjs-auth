import "./globals.css";
import { Inter } from "next/font/google";
// import ToastContainer from "react-hot-toast";
import { ToastContainer as ReactToastifyContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const ToastContainer = () => {
  return <ReactToastifyContainer />;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <ToastContainer /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
