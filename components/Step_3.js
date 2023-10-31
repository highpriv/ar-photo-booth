import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import DevinBooker from "@/assets/players_no_context/devin.png";
import BenSimmons from "@/assets/players/ben_simmons.png";
import GiannisAntetokounmpo from "@/assets/players/giannis_antetokounmpo.png";
import JoelEmbiid from "@/assets/players_no_context/joel.png";
import JoshGiddey from "@/assets/players_no_context/josh.png";
import KevinDurant from "@/assets/players_no_context/kevin.png";
import KyrieIrving from "@/assets/players_no_context/kyrie.png";
import LebronJames from "@/assets/players_no_context/lebron.png";
import LukaDoncic from "@/assets/players_no_context/luka.png";
import NikolaJokic from "@/assets/players_no_context/nikola.png";
import RussellWestbrook from "@/assets/players_no_context/russell.png";
import StephenCurry from "@/assets/players_no_context/stephen.png";
import { saveAs } from "file-saver";

export default function Step_3({ selectedImg }) {
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

  const userImage = players.find((player) => player.key === selectedImg).img
    .src;
  const webcamRef = useRef(null);
  const [next, setNext] = useState(false);
  const [counter, setCounter] = useState(10);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: -100, y: 0 });

  setTimeout(() => {
    if (next) {
      if (counter > 0) {
        setCounter(counter - 2);
      }

      if (counter === 0) {
        capture();
      }
    }
  }, 1000);

  useEffect(() => {
    if (counter === 0) {
      setIsPhotoTaken(true);
    }
  }, [counter]);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (userImage) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const webcamImg = new Image();
      const userImg = new Image();

      webcamImg.src = imageSrc;
      userImg.src = userImage;

      webcamImg.onload = () => {
        canvas.width = webcamImg.width;
        canvas.height = webcamImg.height;
        ctx.drawImage(webcamImg, 0, 0);
        if (imagePosition) {
          ctx.drawImage(userImg, imagePosition.x, imagePosition.y);
        }
        const finalImage = canvas.toDataURL("image/png");
        saveAs(finalImage, "edited-image.png");
      };
    } else {
      // Handle the case when the user hasn't uploaded an image
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 3000);
  }, []);

  return (
    <div className="text-white flex justify-center h-screen">
      <div
        className={`flex flex-col justify-center items-center shadow-2xl bg-white w-1/3 portrait:w-full relative`}
        id="wrapper"
      >
        {userImage && (
          <>
            <img
              src={userImage}
              id="userImage"
              alt="User's Image"
              style={{
                position: "absolute",
                left: imagePosition.x + "px",
                top: imagePosition.y + "px",
                height: "100%",
                width: "100%",
                zIndex: 25,
              }}
            />
          </>
        )}
        <Webcam
          audio={false}
          mirrored={true}
          screenshotQuality={1}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-full h-full absolute z-10"
        />
        {!isPhotoTaken ? (
          <>
            <div className="px-5">
              <div className="flex flex-col items-center gap-10">
                {!next ? (
                  <h1 className="z-50 uppercase text-center text-6xl portrait:text-9xl font-bold [text-shadow:_0px_2px_0px_rgb(129_159_196_/_100%)]">
                    Get into position!
                  </h1>
                ) : (
                  <div className="flex flex-col items-center gap-10 z-50">
                    <h1 className="uppercase text-center text-6xl portrait:text-9xl font-bold text-nba-blue [text-shadow:_0px_2px_0px_rgb(255_255_255_/_100%)]">
                      {counter}
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="absolute bottom-10">
            <div className="px-5">
              <div className="flex flex-col items-center gap-10">
                <button className="uppercase text-center text-6xl xl:text-6xl sm:text-9xl font-bold bg-nba-blue px-7 py-1 sm:px-20 sm:py-10 xl:px-7 xl:py-1 rounded-3xl z-50">
                  Get Your Photo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
