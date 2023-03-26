"use client";
import React from "react";
import {
  Tab,
  Box,
  Divider,
  Stack,
  Tabs,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function ProviderLayout({ children }) {
  return (
    <>
      <Tooltip title="PUSH">
        <Box
          component="span"
          sx={{
            marginBottom: 2,
            fontFamily: "Lacquer",
            fontSize: "x-large",
            cursor: "pointer",
          }}
        >
          PUSH
        </Box>
      </Tooltip>
      <Stack
        direction="column"
        sx={{ padding: 2, marginTop: 4 }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Typography>Subscribe to x-call channel on Push to continue</Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src="/X.png" alt="Push Channel" width={128} height={128} />
        </Box>
        <Button href="https://staging.push.org" target="_blank" size="large">
          Visit PUSH
        </Button>
      </Stack>
    </>
  );
}
