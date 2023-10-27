import { useState, useEffect } from "react";

export default function Step_2() {
  const [next, setNext] = useState(false);
  const [counter, setCounter] = useState(10);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);

  setTimeout(() => {
    if (next) {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }
  }, 1000);

  useEffect(() => {
    if (counter === 0) {
      setIsPhotoTaken(true);
    }
  }, [counter]);

  return (
    <div className="text-white flex justify-center h-screen">
      {!isPhotoTaken ? (
        <div
          className={`flex flex-col justify-center items-center shadow-2xl bg-white w-1/3 portrait:w-full`}
        >
          <div className="px-5">
            <div className="flex flex-col items-center gap-10">
              {!next ? (
                <h1
                  onClick={() => setNext(true)}
                  className="uppercase text-center text-6xl portrait:text-9xl font-bold [text-shadow:_0px_2px_0px_rgb(129_159_196_/_100%)]"
                >
                  Get into position!
                </h1>
              ) : (
                <div className="flex flex-col items-center gap-10">
                  <h1 className="uppercase text-center text-6xl portrait:text-9xl font-bold text-nba-blue">
                    {counter}
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-end items-center shadow-2xl bg-white w-1/3 portrait:w-full pb-10">
          <div className="px-5">
            <div className="flex flex-col items-center gap-10">
              <button className="uppercase text-center text-6xl xl:text-6xl sm:text-9xl font-bold bg-nba-blue px-7 py-1 sm:px-20 sm:py-10 xl:px-7 xl:py-1 rounded-3xl">
                Get Your Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
