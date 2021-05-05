import "./Styling/App.css";
import { MovieList } from "./Pages/Movies/MovieList";
import { Route, Switch, Redirect } from "react-router";
import datasource from "./Data/db.json";
import MoviesRoute from "./Pages/Movies/MoviesRoute";
import { RouteComponentProps } from "react-router-dom";

const MovieRoutes = ({}: MoviesRoute) => (
  <Switch>
    <Route
      exact={true}
      path={"/movies"}
      render={(routeComponentProps) => (
        <MovieList movies={datasource.movies} {...routeComponentProps} />
      )}
    />
    <Route
      path={`movies/:movieId`}
      render={(
        routeComponentsProps: RouteComponentProps<{ movieId: string }>
      ) => {
        console.log("Render movie details");
        const movieId = Number(routeComponentsProps.match.params.movieId);
        if (isNaN(movieId)) {
          return <Redirect to="/" />;
        }

        const movie = datasource.movies.find((m) => m.id === movieId);

        if (movie) {
          return (
            <div>
              <h1>{movie.title}</h1>
            </div>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  </Switch>
);

function App() {
  return (
    <div className="App">
      {/* <Header>
        <Title title="How to React" />
      </Header>
      <Content> */}
      <Switch>
        <Route strict={true} path="/movies" component={MovieRoutes} />

        <Route
          exact
          path="/"
          render={() => {
            return true ? ( // Lad os bare lege, at dette er en authentication ting, og at brugeren er logget ind (true).
              <Redirect to="/movies" />
            ) : (
              <Redirect to="/test1" />
            );
          }}
        />
      </Switch>
      {/* </Content>
      <Footer>
        <Subtitle subtitle="I'm now a Senior React Engineer" />
      </Footer> */}
    </div>
  );
}

export default App;
