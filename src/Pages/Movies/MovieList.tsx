import MoviesRoute from "./MoviesRoute";
import "./Styling/MovieList.css";

// export const MovieList = () => {
//   const [, setSelectedMovie] = useState<number | undefined>(undefined);

//   const metode = (id: number) => {
//     setSelectedMovie(id);
//   };

//   return (
//     <div className="movie-list">
//       {datasource.movies.map((movie) => (
//         <Movie
//           key={movie.id}
//           id={movie.id}
//           title={movie.title}
//           posterUrl={movie.posterUrl}
//           onClick={metode}
//         />
//       ))}
//       ;
//     </div>
//   );
// };
// input parametrer forklaring: movies kommer fra IMovieProps, history og match kommer fra RouteComponentProps og bruges til Routes
export const MovieList = ({ movies, history, match }: MoviesRoute) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          className="movie-list-item"
          onClick={() => history.push(`${match.path}/${movie.id}`)}
        >
          <h2>{movie.title}</h2>
          <img src={movie.posterUrl} />
        </div>
      ))}
    </div>
  );
};

/*
export interface Movie {
    id: number
    title: string
    year: string
    runtime: string
    genres: string[]
    director: string
    actors: string
    plot: string
    posterUrl: string
}

interface MovieListProps extends RouteComponentProps {
    movies: Movie[]
}

const MovieList = ({ movies, history, match }: MovieListProps) => {
    return (
        <div className="movie-list">
            {
                movies.map(movie => (
                    <div className="movie-list-item" onClick={() => history.push(`${match.path}/${movie.id}`)}>
                        <h2>{movie.title}</h2>
                        <img src={movie.posterUrl} />
                    </div>
                ))
            }
        </div>
    )
}

export { MovieList }
*/

// Assignment - Movie detail
// 1. Add an onClick to your movie list item
// 2. Set the initial state to have no selected movie. When a movie is clicked, then
// set the state to the clicked movie.
// 3. Create a new component displaying details about the selected movie. Pass
// in the movie as a prop, and an onClose function.
// 4. If there is a selected movie in the state, show the details.
// 5. Add a button to the detail component, that calls the onClose from the props.
// When onClose is clicked, set the selected movie to undefined.
// Hint: See conditional rendering and passing functions to children
// https://bitbucket.org/mratrifork/react-course-december2019/src
