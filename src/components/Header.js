"use client";
import React, { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Connect from "./Connect";
import Link from "next/link";
import { useInView } from "framer-motion";
import Image from "next/image";
import styles from "./../app/page.module.css";
import { Stack } from "@mui/material";

export default function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              paddingTop: 4,
              paddingLeft: 8,
              paddingRight: 8,
              justifyContent: "space-between",
            }}
          >
            <Link href="/" sx={{}}>
              <Stack direction="row" alignItems="center">
                <div className={styles.thirteen}>
                  <Image
                    src="/X.png"
                    alt="x call tracker"
                    width={40}
                    height={31}
                    priority
                  />
                </div>
                <section ref={ref} className="section">
                  <span
                    style={{
                      transform: isInView ? "none" : "translateX(-200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        flexGrow: 0,
                        fontFamily: "Lacquer",
                        cursor: "pointer",
                        paddingLeft: 2,
                      }}
                    >
                      Call Tracker
                    </Typography>
                  </span>
                </section>
              </Stack>
            </Link>
          </Box>
          <div>
            <Connect />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
