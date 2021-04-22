import "./Styling/App.css";
import { MovieList } from "./Pages/Movies/MovieList";
import { Route, Switch, Redirect } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/movies" />
        <Route path="/movies" component={MovieList} />
      </Switch>
    </div>
  );
}

export default App;
