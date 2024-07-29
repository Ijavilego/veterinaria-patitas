import { Link, Navigate } from "react-router-dom";

const Home = () => {
  const handleClick = () => {
    return <Navigate to="/patient" />;
  };

  return (
    <div className="container w-screen h-screen bg-indigo-300 min-w-full flex flex-col justify-center	items-center	 ">
      <div className="w-1/4 h-1/4">
        <img src="src/image/huellitas.png" alt="huellitas" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="font-black text-5xl">
          <span className="text-indigo-700">Veterinaria</span> patitas
        </p>
        <p className="text-4xl text-center mb-8">
          consultas de diagnóstico, vacunación, chequeos geriátricos, análisis
          clínicos, ecografías y hospitalización diurna, entre otros
        </p>
        <button
          type="button"
          //onClick={handleClick}
          className="w-1/3 bg-indigo-700 h-10"
        >
          <Link to="patient" className="text-2xl">
            Ver citas
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
