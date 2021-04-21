import "./Styling/MovieList.css";

export interface IMovieProps {
  id: number;
  title: string;
  year?: string;
  runtime?: string;
  genres?: string[];
  director?: string;
  actors?: string;
  plot?: string;
  posterUrl: string;
  onClick: (movieId: number) => void;
}

const Movie: React.FC<IMovieProps> = (props) => (
  <div className="movie-list-item">
    <h2>{props.title}</h2>
    <img src={props.posterUrl} />
    <button onClick={() => props.onClick(props.id)}>Info</button>
  </div>
);
export default Movie;
