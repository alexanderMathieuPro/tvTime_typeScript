import { Navigate, useLoaderData, Link } from "react-router-dom";
import Card from "../components/Card";
const Home = () => {
  interface FilmAtributes {
    attributes: {
      titre: string;
      dateSortie: string;
      cover: {
        data: {
          attributes: {
            url: string;
          };
        }
      };
    };
    id: number;
  }
  if (localStorage.getItem("token") == null) {
    return <Navigate to={"/login"} replace />;
  }
  const data = useLoaderData() as { data: FilmAtributes[] };

  return (
    <div className="h-full bg-gradient-main">
      <Link className="text-white" to={"/films/create"}>
        Creer un film
      </Link>
      <div className="grid lg:grid-cols-4 justify-items-center md:grid-cols-2 sm:grid-cols-1 gap-y-4">
        {data.data.map((film) => (
          <Card
            key={film.id}
            titre={film.attributes.titre}
            dateSortie={film.attributes.dateSortie}
            cover={film.attributes.cover.data?.attributes.url}
            id={film.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
