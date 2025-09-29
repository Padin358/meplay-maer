import type { Route } from "./+types/home";
import Navbar from "elements/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MePlay - Úvod" },
    { name: "MePlay - Úvod", content: "MePlay" },
  ];
}

export default function Home() {
  return <div className="">
    <Navbar />
  </div>;
}
