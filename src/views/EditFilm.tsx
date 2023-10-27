import { Form, useLoaderData } from "react-router-dom";
interface FilmDatas {
  data: {
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
  data: CategoriesDatas[]
}

interface CategoriesDatas {
  data: {
    attributes: {
      nom: string;
      id: number
    }
  }
}

export const EditFilmAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const formUpload = new FormData();

}

const EditFilm = () => {
  const film = useLoaderData() as { film: FilmDatas, categories: Categories };
  console.log(film);
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
                    <div key={category.data.attributes.id}>
                        <input type="checkbox" name="categories[]" value={category.data.attributes.id} />
                        <label htmlFor="categories">{category.data.attributes.nom}</label>
                    </div>
                ))}
        </div>
        <input type="submit" />
      </Form>
    </div>
  );
};
export default EditFilm;
