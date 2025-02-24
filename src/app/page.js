import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/NavBar";
import HeroSection from "@/Components/HeroSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
    </>
  );
}
