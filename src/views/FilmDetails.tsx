import { Link, useLoaderData } from "react-router-dom";
import { FilmDetailInterface } from "../interfaces/FilmDetailInterface";
const FilmDetail = () => {
  const film = useLoaderData() as { data: FilmDetailInterface };

  const handleClick = (filmId: number) => {
    console.log(filmId);
    fetch(`http://localhost:1337/api/films/${filmId}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    });
    window.location.href = '/';
  }

  return (
    <div className="h-full bg-gradient-main pb-10">
      <div className="overflow-hidden flex bg-white p-4 rounded-b-[50px] shadow-2xl">
        <img
          src={`http://localhost:1337${film.data.attributes.cover.data.attributes.url}`}
          className="h-96 rounded-[50px] border-4 border-sky-500"
        />
        <div className="pt-4 ml-6 space-y-2">
        <h1 className=" font-bold text-3xl text-sky-500">
          {film.data.attributes.titre}
        </h1>
        <p className="text-lg">{film.data.attributes.description}</p>
        </div>
      </div>
      <div className="flex justify-end my-[-30px] mx-[80px] space-x-10">
        <Link to={`/film/${film.data.id}/edit`} className="group bg-sky-500 rounded-full p-4 flex justify-center items-center hover:shadow-md hover:shadow-sky-400 transition-transform transform hover:scale-105 duration-300">
          <span className="material-symbols-outlined text-[40px] text-white">
            edit
          </span>
        </Link>
        <button onClick={() => handleClick(film.data.id)} className="bg-red-500 rounded-full p-4 flex justify-center items-center hover:shadow-md hover:shadow-red-400 transition-transform transform hover:scale-105 duration-300">
          <span className="material-symbols-outlined text-[40px] text-white">
            Delete
          </span>
        </button>
      </div>
      <div className="pt-10">
      <p className="font-bold text-white pb-4 text-xl pl-4">Médias</p>
      <div className="flex flex-wrap items-center">
      {
        film.data.attributes.images.data?.map((image) => (
          <img
            key={image.id}
            src={`http://localhost:1337${image.attributes.url}`}
            className="h-64 rounded-[50px] border-4 border-sky-500"
          />
        ))
      }
      </div>
      </div>
    </div>
  );
};

export default FilmDetail;
