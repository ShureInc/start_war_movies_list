import { gql } from "@apollo/client";

const OMDB_API_KEY = "9e1c5f62";

export const FILM_LIST = gql`
  {
    allFilms {
      films {
        title
        characterConnection {
          characters {
            name
          }
        }
        planetConnection {
          planets {
            name
          }
        }
      }
    }
  }
`;

export const FILM = gql`
  query film($title: String) {
    film(title: $title)
      @rest(type: "Film", path: "/?apikey=${OMDB_API_KEY}&t={args.title}") {
      Title
      Year
      Genre
      Rated
      Runtime
      Poster
      Director
      Plot
      imdbID
    }
  }
`;
