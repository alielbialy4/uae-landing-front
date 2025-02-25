import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/NavBar";
import HeroSection from "@/Components/HeroSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";
export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Projects/>
      <Services/>
    </>
  );
}
