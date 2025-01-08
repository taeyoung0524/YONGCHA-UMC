import React from "react";
import styled from "styled-components";
import { Nowplaying } from "../movies/now-playing"; //영화 데이터 import 해주기 
import { useState, useEffect } from "react";

const MovieList = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:20px;
`

const MovieCard = styled.div`
    width:150px;
    box-shadow: 0px 4px;
    position: relative;
`
const MoviePoster = styled.img `
    width:100%;
    height:230px;
`

const MovieTitle = styled.h3`
  color: #D91656;
  font-size: 1rem;
  margin: 10px 0 5px 0;
  font-weight:bold;
`

const MovieReleaseDate = styled.p`
  color: lightgray;
  font-size: 0.8rem;
  margin: 0;
`

const Overlay = styled.div` 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 230px;
  background: rgba(0, 0, 0, 0.72);
  display: none;
  justify-content: center;
  align-items: center;
  color: #D91565;
  font-size: 1rem;
  font-weight:bold;

  ${MovieCard}:hover & {
    display: flex;
  }
`;

const NowplayingPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(Nowplaying.results);
    },[]);

    return (
        <MovieList>
            {movies.map((movie)=> (
                <MovieCard key={movie.id}>
                    <MoviePoster 
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    />
                    <Overlay>More Info</Overlay>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
                </MovieCard>
            ))}
        </MovieList>

    );
};

export default NowplayingPage;
