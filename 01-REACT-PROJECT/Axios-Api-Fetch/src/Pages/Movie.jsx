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

//If we dont want to Create extra Card component then use the below code ...
  // return (
  //   <ul className="card-items">
  //     {data.map((curEle) => {
  //       const { Poster, imdbID, Title } = curEle; // Destructuring the current element

  //       return (
  //         <li key={imdbID} className="hero-container">
  //           <div className="main-container">
  //             <div className="poster-container">
  //               <h3>{Title}</h3>
  //               <img src={Poster} className="poster" alt={imdbID} />
  //             </div>
  //             <div className="ticket-container">
  //               <div className="ticket__content">
  //                 <a href={`/movie/${imdbID}`}>
  //                   <button className="ticket__buy-btn">Watch now</button>
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
};
