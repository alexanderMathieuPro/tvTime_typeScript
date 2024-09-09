import { Form, useLoaderData } from "react-router-dom";
interface FilmDatas {
  data: {
    id: number;
    attributes: {
      titre: string;
      description: string;
      duree: number;
      dateSortie: string;
      cover: string;
    };
  }
}

interface Categories {
  data: {
    attributes: {
      id: number;
      nom: string;
    };
  }
}

export const EditFilmAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const formUpload = new FormData();
  const cover = formData.get("cover") as File;
  formUpload.append("files", cover);

    const uploadFile = await fetch("http://localhost:1337/api/upload", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: formUpload
    }).then((res) => res.json());

    const data = await fetch(`http://localhost:1337/api/films/${filmId}`, {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: {
        titre: formData.get("titre"),
        description: formData.get("description"),
        duree: formData.get("duree"),
        dateSortie: formData.get("dateSortie"),
        cover: uploadFile[0].id,
      }
    })
  })
  return window.location.href = "/";
}

const EditFilm = () => {
  const film = useLoaderData() as { film: FilmDatas, categories: Categories[] };
  const filmId = film.film.data.id;
  return (
    <div className="flex justify-center items-center h-full bg-sky-500 pt-4 pb-4">
      <Form
        method="post"
        className="flex flex-col w-[400px] space-y-4 border-4 rounded-2xl p-4"
        encType="multipart/form-data"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-white text-center">
            Titre
          </label>
          <input
            type="text"
            defaultValue={film.film.data.attributes.titre}
            name="titre"
            placeholder="Titre"
            className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-white text-center">
            Description
          </label>
          <textarea
            defaultValue={film.film.data.attributes.description}
            name="description"
            placeholder="Description"
            className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal h-[200px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-white text-center">
            Durée (en minutes)
          </label>
          <input
            type="number"
            defaultValue={film.film.data.attributes.duree}
            name="duree"
            placeholder="durée"
            className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal"
          />
        </div>
        <input
          type="date"
          name="dateSortie"
          defaultValue={film.film.data.attributes.dateSortie}
        />
        <input type="file" name="cover" className="file:bg-transparent " />
        <label>Categories</label>
        <div className="flex flex-wrap space-x-4">
        {film.categories.data.map((category) => (
                    <div key={category.id}>
                        <input type="checkbox" name="categories[]" value={category.id} />
                        <label htmlFor="categories">{category.attributes.nom}</label>
                    </div>
                ))}
        </div>
        <input type="submit"/>
      </Form>
    </div>
  );
};
export default EditFilm;
