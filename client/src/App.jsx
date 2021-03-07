import { BrowserRouter as Router, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";

import FilmList from "./components/FilmList";
import FilmDetail from "./components/FilmDetail";
import { FILM_LIST } from "./api/queries";
import { Wrapper } from "./styles";

const App = () => {
  const { loading, error, data } = useQuery(FILM_LIST);

  return (
    <Wrapper>
      {error ? (
        <p>An error happened. Please try again later.</p>
      ) : (
        <>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Router>
              <Route
                exact
                path="/"
                render={() => <FilmList films={data?.allFilms.films} />}
              />
              <Route exact path="/:id" component={FilmDetail} />
            </Router>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default App;
