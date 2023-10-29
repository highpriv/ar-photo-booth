import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

export default function Step_2() {
  const webcamRef = useRef(null);
  const [next, setNext] = useState(false);
  const [counter, setCounter] = useState(10);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  setTimeout(() => {
    if (next) {
      if (counter > 0) {
        setCounter(counter - 1);
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUserImage(imageUrl);
  };

  const capture = () => {
    debugger;
    const imageSrc = webcamRef.current.getScreenshot();
    if (userImage) {
      // Combine the camera image and user-selected image
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
      <>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        {userImage && (
          <>
            <img
              src={userImage}
              alt="User's Image"
              style={{
                left: imagePosition.x + "px",
                top: imagePosition.y + "px",
              }}
            />
            sa - {JSON.stringify(imagePosition)}
          </>
        )}
      </>
      {!isPhotoTaken ? (
        <div
          className={`flex flex-col justify-center items-center shadow-2xl bg-white w-1/3 portrait:w-full`}
        >
          <div className="px-5">
            <div className="flex flex-col items-center gap-10">
              {!next ? (
                <h1 className="uppercase text-center text-6xl portrait:text-9xl font-bold [text-shadow:_0px_2px_0px_rgb(129_159_196_/_100%)]">
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
