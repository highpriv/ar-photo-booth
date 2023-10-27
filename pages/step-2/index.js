import DevinBooker from "@/assets/players/devin_booker.png";
import BenSimmons from "@/assets/players/ben_simmons.png";
import GiannisAntetokounmpo from "@/assets/players/giannis_antetokounmpo.png";
import JoelEmbiid from "@/assets/players/joel_embiid.png";
import JoshGiddey from "@/assets/players/josh_giddey.png";
import KevinDurant from "@/assets/players/kevin_durant.png";
import KyrieIrving from "@/assets/players/kyrie_irving.png";
import LebronJames from "@/assets/players/lebron_james.png";
import LukaDoncic from "@/assets/players/luka_doncic.png";
import NikolaJokic from "@/assets/players/nikola_jokic.png";
import RussellWestbrook from "@/assets/players/russel_westbrook.png";
import StephenCurry from "@/assets/players/stephen_curry.png";
import NBALogo from "@/assets/nba.png";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Step_2() {
  const players = [
    {
      img: BenSimmons,
      name: "Ben Simmons",
    },
    {
      img: DevinBooker,
      name: "Devin Booker",
    },
    {
      img: GiannisAntetokounmpo,
      name: "Gianis Antetokounmpo",
    },
    {
      img: JoelEmbiid,
      name: "Joel Embiid",
    },
    {
      img: JoshGiddey,
      name: "Josh Giddey",
    },
    {
      img: KevinDurant,
      name: "Kevin Durant",
    },
    {
      img: KyrieIrving,
      name: "Kyrie Irving",
    },
    {
      img: LebronJames,
      name: "Lebron James",
    },
    {
      img: LukaDoncic,
      name: "Luka Doncic",
    },
    {
      img: NikolaJokic,
      name: "Nikola Jokic",
    },
    {
      img: RussellWestbrook,
      name: "Russell Westbrook",
    },
    {
      img: StephenCurry,
      name: "Stephen Curry",
    },
  ];
  return (
    <>
      <div className="text-white flex justify-center">
        <div
          className={`flex flex-col items-center ${styles.container} shadow-lg`}
        >
          <div className="px-5 shadow-lg py-10 flex flex-col gap-10 w-full">
            <h1 className="uppercase text-center text-6xl sm:text-9xl xl:text-6xl font-bold">
              Pick your player
            </h1>

            <div className="grid grid-cols-3 portrait:grid-cols-2 gap-4 sm:gap-20 xl:gap-4 w-full portrait:mt-16">
              {players.map((player) => (
                <div className="flex flex-col items-center hover:scale-110">
                  <a href="/step-3">
                    <Image src={player.img} alt={player.name} className='sm:h-96 xl:h-full w-auto' />
                  </a>
                </div>
              ))}
            </div>
            <div className="flex justify-center portrait:mt-20">
              <Image src={NBALogo} alt="" className='h-16 xl:h-16 sm:h-40 w-auto' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
