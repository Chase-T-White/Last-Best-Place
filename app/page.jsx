import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./home.module.css";
import Hero from "./Components/Home/Hero";
import Mission from "./Components/Home/Mission";
import Beers from "./Components/Home/Beers/Beers";
import Events from "./Components/Home/Events";
import Visit from "./Components/Home/Visit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Mission />
      <Beers />
      <Events />
      <Visit />
    </main>
  );
}
