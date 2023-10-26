import { CreateFilmCategories } from "../interfaces/CreateFilmCategoriesLoader";
export const CreateFilmLoader = async (): Promise<CreateFilmCategories> => {
    const data: CreateFilmCategories = await fetch("http://localhost:1337/api/categories", {
      method: "GET", 
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then((res) => res.json());
    return data;
  }