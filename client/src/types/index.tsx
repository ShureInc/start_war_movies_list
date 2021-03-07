export interface IFilm {
  title: string;
  characterConnection: { characters: ICharacter[] };
  planetConnection: { planets: IPlanet[] };
}

export interface ICharacter {
  name: string;
}

export interface IPlanet {
  name: string;
}
