import { RouteComponentProps } from "react-router-dom";
import { IMovieProps } from "./Movie";

interface MovieListProps extends RouteComponentProps {
  movies: IMovieProps[];
}

export default MovieListProps;
