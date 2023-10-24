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
      <h1 className="uppercase text-center text-3xl font-bold">
        Pick your player
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {players.map((player) => (
          <div className="flex flex-col items-center">
            <Image src={player.img} alt={player.name} />
          </div>
        ))}
      </div>
    </>
  );
}
