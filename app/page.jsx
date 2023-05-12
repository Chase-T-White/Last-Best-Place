import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Hero from "./Components/Home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}