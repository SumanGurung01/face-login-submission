import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/GlobalContext";

function Home() {
  const navigate = useNavigate();

  const { login } = useContext(Context);

  useEffect(() => {
    if (!login) navigate("/");
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-20 text-center text-3xl font-semibold text-zinc-200 md:text-5xl">
        👋 Welcome to <span className="text-blue-400">Home Page</span>.
      </p>

      <button
        onClick={() => navigate("/")}
        className="rounded-md bg-blue-500 px-10 py-2 font-semibold text-zinc-200"
      >
        Log Out
      </button>
    </div>
  );
}

export default Home;
