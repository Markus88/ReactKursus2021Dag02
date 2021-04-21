import datasource from "../../Data/db.json";
import Movie from "./Movie";

export const MovieList = () => {
  return (
    <div className="movie-list">
      {datasource.movies.map((title, index) => (
        <Movie title={title.title} posterUrl={title.posterUrl} key={index} />
      ))}
      ;
    </div>
  );
};
