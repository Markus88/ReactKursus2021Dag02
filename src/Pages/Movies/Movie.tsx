export interface IMovieProps {
  title: string;
  posterUrl: string;
}

const Movie: React.FC<IMovieProps> = (props) => (
  <div className="movie-list-item">
    <h2>{props.title}</h2>
    <img src={props.posterUrl} />
  </div>
);
export default Movie;
