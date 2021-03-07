import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  color: #fff;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  width: 75%;
  margin: auto;
`;

export const FilmTitle = styled.h2`
  color: #ffe81f;
`;

export const SubTitle = styled.p`
  span:first-child {
    font-size: 1.1rem;
    font-weight: bold;
    color: #b1ab99;
  }
`;

export const Details = styled.div`
  padding: ${(props) => (props.sidePadding ? "0 1rem" : "0")};
  width: ${(props) => (props.fullWidth ? null : "60%")};
  line-height: 150%;
  text-align: left;
`;

export const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #282828;
  box-shadow: 1px 1px 50px -1px #000;
  border-radius: 7px;
  height: 650px;
  padding-bottom: 1rem;
`;

export const FilmPoster = styled.img`
  width: ${(props) => (props.fullWidth ? "100%" : "30%")};
  border-radius: ${(props) =>
    props.allRoundedCorners ? "7px" : "7px 7px 0 0"};
  box-shadow: 0px 1px 1px -0px rgba(225, 225, 225, 0.2);
`;

export const FilmDetailContainer = styled.div`
  width: 75%;
  margin: auto;
`;

export const FilmSnapshotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem auto;
`;

export const Button = styled.button`
  background-color: #282828;
  border: 0;
  border-radius: 0.5rem;
  color: #fff;
  outline: none;
  padding: 0.6rem 1rem;
  box-shadow: 1px 1px 50px -1px #000;

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;
