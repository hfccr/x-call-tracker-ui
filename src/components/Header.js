"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Connect from "./Connect";
import Link from "next/link";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" sx={{}}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: "Lacquer",
                  cursor: "pointer",
                  textShadow: "1px 1px 10px #fff, 1px 1px 10px #ccc",
                }}
              >
                ST
              </Typography>
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
