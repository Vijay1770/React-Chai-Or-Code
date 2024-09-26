import "./Card.css";

export const Card = ({ movieData }) => {
  const { Poster, imdbID ,Title } = movieData;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
        <h3>{Title}</h3>
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <a href={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
