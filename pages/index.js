import styles from "@/styles/Home.module.css";
export default function Home() {
  return (
    <div className="text-white flex justify-center h-screen">
      <div
        className={`flex flex-col items-center ${styles.container} shadow-lg`}
      >
        <div className="px-5">
          <div className="flex flex-col items-center gap-10">
            <h1 className="uppercase text-center text-3xl font-bold">
              <p>TAKE A PHOTO </p>
              <p>WITH YOUR FAVORITE </p>
              <p>NBA PLAYER</p>
            </h1>
            <a
              href="/step-2"
              className={`btn btn-primary uppercase bg-white text-nba-blue px-5 py-3 rounded-xl text-3xl font-bold ${styles.hoverEffect}`}
            >
              Tap to Begin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
