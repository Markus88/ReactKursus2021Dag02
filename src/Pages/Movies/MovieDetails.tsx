import { IMovieProps } from "./Movie";

export const MovieDetails = (movieInformation: IMovieProps) => {
  return (
    <div className="movie-details">
      <text>id: {movieInformation.id}</text>
      <text>title: {movieInformation.title}</text>
      <text>year: {movieInformation.year}</text>
      <text>runtime: {movieInformation.runtime}</text>
      <text>genres: {movieInformation.genres}</text>
      <text>director: {movieInformation.director}</text>
      <text>actors: {movieInformation.actors}</text>
      <text>plot: {movieInformation.plot}</text>
    </div>
  );
};
