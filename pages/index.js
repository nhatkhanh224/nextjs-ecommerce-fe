import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import ListProduct from "@/components/ListProduct";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav/>
      <ListProduct/>
      <Footer/>
    </>
  );
}
