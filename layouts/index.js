import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NBALogo from "@/assets/nba.svg";

export default function Layout({ children }) {
  return (
    <div className="text-white flex justify-center">
      <div
        className={`flex flex-col items-center justify-center h-full ${styles.container} shadow-lg py-5 px-16 overflow-y-scroll`}
      >
        <div className="flex flex-col h-full w-full items-center justify-center gap-16">
          {children}
        </div>
        <div className="">
          <Image src={NBALogo} alt="NBA Logo" height={50} />
        </div>
      </div>
    </div>
  );
}
