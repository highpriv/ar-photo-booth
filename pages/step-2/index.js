import { useState } from "react";
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
import Step_3 from "../../components/Step_3";

export default function Step_2() {
  const [step, setStep] = useState(2);
  const [selectedImg, setSelectedImg] = useState(null);
  const players = [
    {
      img: BenSimmons,
      name: "Ben Simmons",
      key: "ben_simmons",
    },
    {
      img: DevinBooker,
      name: "Devin Booker",
      key: "devin_booker",
    },
    {
      img: GiannisAntetokounmpo,
      name: "Gianis Antetokounmpo",
      key: "gianis_antetokounmpo",
    },
    {
      img: JoelEmbiid,
      name: "Joel Embiid",
      key: "joel_embiid",
    },
    {
      img: JoshGiddey,
      name: "Josh Giddey",
      key: "josh_giddey",
    },
    {
      img: KevinDurant,
      name: "Kevin Durant",
      key: "kevin_durant",
    },
    {
      img: KyrieIrving,
      name: "Kyrie Irving",
      key: "kyrie_irving",
    },
    {
      img: LebronJames,
      name: "Lebron James",
      key: "lebron_james",
    },
    {
      img: LukaDoncic,
      name: "Luka Doncic",
      key: "luka_doncic",
    },
    {
      img: NikolaJokic,
      name: "Nikola Jokic",
      key: "nikola_jokic",
    },
    {
      img: RussellWestbrook,
      name: "Russell Westbrook",
      key: "russel_westbrook",
    },
    {
      img: StephenCurry,
      name: "Stephen Curry",
      key: "stephen_curry",
    },
  ];
  return (
    <>
      {step === 2 ? (
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
                    <button
                      onClick={() => {
                        setSelectedImg(player.key);
                        setStep(3);
                      }}
                    >
                      <Image
                        src={player.img}
                        alt={player.name}
                        className="sm:h-96 xl:h-full w-auto"
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center portrait:mt-20">
                <Image
                  src={NBALogo}
                  alt=""
                  className="h-16 xl:h-16 sm:h-40 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Step_3 selectedImg={selectedImg} />
      )}
    </>
  );
}
