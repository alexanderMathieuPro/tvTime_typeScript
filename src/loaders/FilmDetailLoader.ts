import { LoaderFunction } from "react-router-dom";
import { FilmData, Param } from "../interfaces/FilmDetailInterface";

export const FilmDetailLoader: LoaderFunction<Param> = async ({params}): Promise<FilmData> => {
    const filmId = params.id;
    const film: FilmData = await fetch(`http://localhost:1337/api/films/${filmId}?populate=*`, {
      method: "GET", 
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then((res) => res.json());
    return film;
  }