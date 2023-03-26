"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Connect from "@/components/Connect";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}></div>
      <div className={styles.grid}>
        <Link href="/dapp/push" className={styles.card}>
          <h2 className={styles.menuItem}>
            Join Channel<span>&gt;</span>
          </h2>
          <p className={styles.menuItem}>Join X Call Tracker Push Channel</p>
        </Link>

        <Link href="/dapp/track" className={styles.card}>
          <h2 className={styles.menuItem}>
            Track xCall<span>&gt;</span>
          </h2>
          <p className={styles.menuItem}>Setup xCall tracking</p>
        </Link>
      </div>
    </main>
  );
}
