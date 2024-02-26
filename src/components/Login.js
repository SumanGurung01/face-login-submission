import React, { useEffect, useRef, useContext, useState } from "react";
import { Context } from "../Context/GlobalContext";
import { VideoOff } from "lucide-react";
import * as faceapi from "face-api.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const videoRef = useRef();

  const navigate = useNavigate();

  const { setLogin } = useContext(Context);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    
    // function to access the webcam of the device and display content in video tag 
    function accessVideo() {
      navigator.getUserMedia(
        { video: {} },
        (stream) => {
          videoRef.current.srcObject = stream;
          setLoaded(true);
        },
        (err) => console.log(err),
      );
    }

    // load the face detection model from face-api.js
    Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri("/models")])
      .then(() => {
        console.log("Accessed Video Camera");
        accessVideo();
      })
      .catch((err) => console.log(err));
    
    setLogin(false);
  }, []);

  async function checkFace() {

    // use face-api.js to detect faces in the video
    console.log("Detecting faces ...");
    const detection = await faceapi.detectAllFaces(
      videoRef.current,
      new faceapi.TinyFaceDetectorOptions(),
    );

    // if face is detected then detection.length > 0 
    if (detection.length > 0) {
      setLogin(true);
      navigate("/home");
    } else {
      toast.error("Cannot find face. Please try again");
    }
  }

  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center">
      <p className="text-center text-3xl font-semibold text-zinc-300 md:text-5xl">
        Face Login Application in <span className="text-blue-400">React</span>.
      </p>

      <video
        id="videoID"
        autoPlay
        ref={videoRef}
        className={`my-10 w-full rounded-lg ${loaded ? null : "hidden"}`}
      />

      <div
        className={`${
          loaded ? "hidden" : null
        } my-10 flex h-[450px] w-full items-center justify-center rounded-lg bg-zinc-700`}
      >
        <VideoOff color={"#bbbbbb"} size={40} />
        <p className="ml-5 text-zinc-300">Please wait ...</p>
      </div>

      <button
        onClick={checkFace}
        className="rounded-md bg-blue-500 px-10 py-2 font-semibold text-zinc-200"
      >
        Login
      </button>

      <p className="my-10 text-zinc-400">
        Note: Face detection may take 1 to 2 seconds. Please wait 🙏
      </p>
    </div>
  );
}

export default Login;
