import { LoaderFunction } from "react-router-dom";
import { Param } from "../interfaces/loadersIterfaces/EditFilmLoaderInterface";

export const EditFilmLoader: LoaderFunction<Param> = async ({params}) => {
  const filmId = params.id;
  const film = await fetch(`http://localhost:1337/api/films/${filmId}?populate=*`, {
    method: "GET", 
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }).then((res) => res.json());

  const categories = await fetch("http://localhost:1337/api/categories", {
    method: "GET", 
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }).then((res) => res.json());
  return {film, categories};
}