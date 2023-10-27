import styles from "@/styles/Home.module.css";
import NBALogo from "@/assets/nba.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="text-white flex justify-center h-screen">
      <div
        className={`flex flex-col items-center ${styles.container} shadow-2xl`}
      >
        <div className="px-5">
          <div className="flex flex-col items-center gap-10 xl:gap-10 2xl:gap-60">
            <h1 className="uppercase text-center text-6xl font-bold sm:text-9xl xl:text-6xl">
              <p>TAKE A PHOTO </p>
              <p>WITH YOUR FAVORITE </p>
              <p>NBA PLAYER</p>
            </h1>
            <a
              href="/step-2"
              className={`btn btn-primary uppercase bg-white text-nba-blue px-5 py-3 rounded-xl text-5xl sm:text-9xl xl:text-5xl font-bold ${styles.hoverEffect}`}
            >
              Tap to Begin
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-50 pb-5">
        <Image src={NBALogo} alt="" className='h-16 sm:h-40 xl:h-16 w-auto' />
      </div>
    </div>
  );
}
