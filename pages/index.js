import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NBALogo from "@/assets/nba.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col h-full w-full items-center justify-center">
          <h1 className="uppercase text-center">
            TAKE A PHOTO WITH YOUR FAVORITE NBA PLAYER
          </h1>
          <button className="btn btn-primary uppercase">Tap to Begin</button>
        </div>
        <div className="">
          <Image src={NBALogo} alt="NBA Logo" height={200} />
        </div>
      </div>
    </div>
  );
}
