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
          <h2 className={inter.className}>
            Join Channel<span>&gt;</span>
          </h2>
          <p className={inter.className}>Join X Call Tracker Push Channel</p>
        </Link>

        <Link href="/dapp/provider/about" className={styles.card}>
          <h2 className={inter.className}>
            Track xCall<span>&gt;</span>
          </h2>
          <p className={inter.className}>Setup xCall tracking</p>
        </Link>

        <Link href="/dapp/trader" className={styles.card}>
          <h2 className={inter.className}>
            Create xCall<span>&gt;</span>
          </h2>
          <p className={inter.className}>Create xCalls</p>
        </Link>
      </div>
    </main>
  );
}
