import Image from "next/image";
import Nav from "@/components/Nav";
import ListProduct from "@/components/ListProduct";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Nav/>
      <ListProduct/>
      <Footer/>
    </>
  );
}
