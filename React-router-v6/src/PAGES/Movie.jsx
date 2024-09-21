import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Card";

export const Movie = () => {
  const movieData = useLoaderData();
  return (
    <>
      <ul className="card-container">
        {movieData.Search.map((curMovie) => {
          return <Card curMovie={curMovie}  />;
        })}
      </ul>
    </>
  );
};
