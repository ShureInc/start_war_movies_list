import { useLocation, Link } from "react-router-dom";

import { ICharacter, IPlanet } from "../../types";
import {
  FilmDetailContainer,
  FilmSnapshotContainer,
  FilmTitle,
  SubTitle,
  Details,
  FilmPoster,
  Button,
} from "../../styles";

const FilmDetail = () => {
  const {
    state: {
      Title,
      Year,
      Rated,
      Runtime,
      Poster,
      Director,
      Plot,
      characters,
      planets,
    },
  } = useLocation<FilmDetailProps>();

  return (
    <FilmDetailContainer>
      <Button>
        <Link to="/">&#8592; Back to Film List</Link>
      </Button>

      <FilmSnapshotContainer>
        <FilmPoster src={Poster} alt={Title} allRoundedCorners />
        <Details>
          <FilmTitle>
            {Title} <span>({Year})</span>
          </FilmTitle>
          <SubTitle>
            <span>Director: </span>
            {Director}
          </SubTitle>
          <SubTitle>
            <span>Rated: </span>
            {Rated}
          </SubTitle>
          <SubTitle>
            <span>Runtime: </span>
            {Runtime}
          </SubTitle>
        </Details>
      </FilmSnapshotContainer>

      <Details fullWidth>
        <SubTitle>
          <span>Summary:</span>
          <br />
          {Plot}
        </SubTitle>
        <SubTitle>
          <span>Characters:</span>
          <br />
          {characters.map((char, index) => (
            <span key={index}>
              {char.name}
              {""}
              {index === characters.length - 1 ? null : ","}{" "}
            </span>
          ))}
        </SubTitle>
        <SubTitle>
          <span>Planets:</span>
          <br />
          {planets.map((planet, index) => (
            <span key={index}>
              {planet.name}
              {""}
              {index === planets.length - 1 ? null : ","}{" "}
            </span>
          ))}
        </SubTitle>
      </Details>
    </FilmDetailContainer>
  );
};

type FilmDetailProps = {
  Title: string;
  Year: string;
  Rated: string;
  Runtime: string;
  Poster: string;
  Director: string;
  Plot: string;
  characters: ICharacter[];
  planets: IPlanet[];
};

export default FilmDetail;
