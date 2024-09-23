import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Card } from "../components/Card";

export const Movie = () => {
  const [data, setData] = useState([]);
  const API =
    "http://www.omdbapi.com/?i=tt3896198&apikey=5bab7c76&s=titanic&page=1";

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  //This is used to render the UI on web...
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul className="card-items">
      {data.map((curEle) => {
        return <Card key={curEle.imdbID} movieData={curEle} />;
      })}
    </ul>
  );
};
