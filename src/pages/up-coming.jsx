import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Upcoming } from "../movies/up-coming";

const MovieList = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:20px;
`
// position : relative -> 자신을 기준으로 위치 설정 
// relative로 설정된 요소는 자식 요소의 기준점이 된다. 
// 본인의 위치는 기본적으로 레이아웃 상에서 변하지 않지만, 자식 요소가 absolute로 설정되면 그 자식 요소의 기준이 된다. 
const MovieCard = styled.div`
    width:150px;
    box-shadow: 0px 4px;
    position:relative;
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
// position : absolute -> 부모 기준으로 위치 지정 
// 가장 가까운 relative 또는 absolute로 설정된 부모 요소를 기준으로 위치가 설정됨 
// 만약 부모 요소 중에 relative나 absolute가 없다면, 브라우저 뷰포드를 기준으로 위치가 설정됨됨
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

const UpcomingPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(Upcoming.results);
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

export default UpcomingPage;
