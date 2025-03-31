import { Routes } from "../models";
import Navigator from "@/components/Navigator/Navigator";
import pageStyles from "./page.module.scss";
import Image from "next/image";
import falloutBoy from "../../public/falloutBoy_v2.jpg";
import { falloutBoyBlur } from "./models";

export default function Home() {
  return (
    <div className={pageStyles.page}>
      <h1>Welcome to Rick and Morty app</h1>
      <h2>What do you see?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
      <Image
        className={pageStyles.image}
        width={400}
        src={falloutBoy}
        alt="falloutBoy"
        blurDataURL={falloutBoyBlur}
        placeholder="blur"
      />
    </div>
  );
}
