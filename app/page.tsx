import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import Hobbies from "@/components/Hobbies";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import GoalsReading from "@/components/GoalsReading";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <AboutBento />
        <Hobbies />
        <Gallery />
        <Projects />
        <Achievements />
        <GoalsReading />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
