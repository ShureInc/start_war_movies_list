import { FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { FILM } from "../../api/queries";
import { IFilm } from "../../types";
import { Card, FilmTitle, SubTitle, Details, FilmPoster } from "../../styles";

const FilmCard: FunctionComponent<FilmProps & RouteComponentProps> = ({
  film,
  history,
}) => {
  const { error, loading, data } = useQuery(FILM, {
    variables: { title: film.title },
  });

  const handleClick = () => {
    history.push(`/${data.film.imdbID}`, {
      ...data.film,
      characters: film.characterConnection.characters,
      planets: film.planetConnection.planets,
    });
  };

  return (
    <>
      {error ? (
        <p>An error happened. Please try again later.</p>
      ) : (
        <>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Card onClick={handleClick}>
              <FilmPoster
                src={data.film.Poster}
                alt={data.film.Title}
                fullWidth
              />
              <Details sidePadding fullWidth>
                <FilmTitle>
                  {data.film.Title} <span>({data.film.Year})</span>
                </FilmTitle>
                <SubTitle>
                  <span>Rated: </span>
                  {data.film.Rated}
                </SubTitle>
                <SubTitle>
                  <span>Runtime: </span>
                  {data.film.Runtime}
                </SubTitle>
              </Details>
            </Card>
          )}
        </>
      )}
    </>
  );
};

type FilmProps = {
  film: IFilm;
};

export default withRouter(FilmCard);
