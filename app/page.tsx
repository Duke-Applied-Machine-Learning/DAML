"use client";
import Homepage from "./components/homepage";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function Home() {
  return <Homepage />;
}
