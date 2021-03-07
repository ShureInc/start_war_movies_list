import FilmCard from "../FilmCard";
import { IFilm } from "../../types";
import { Wrapper, Grid } from "../../styles";

const FilmList = ({ films }: FilmListProps) => {
  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>Star Wars Movies</h1>
      <br />
      <Grid>
        {films.map((film) => (
          <div key={film.title}>
            <FilmCard film={film} />
          </div>
        ))}
      </Grid>
    </Wrapper>
  );
};

type FilmListProps = {
  films: IFilm[];
};

export default FilmList;
