import React from "react";
import styled from "styled-components";
import { Nowplaying } from "../movies/now-playing"; //영화 데이터 import 해주기 

const MovieList = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:20px;
`

const MovieCard = styled.div`
    width:150px;
    box-shadow: 0px 4px 
`
const MoviePoster = styled.div `
    width:100%;
`

const MovieTitle = styled.h3`
  color: white;
  font-size: 1rem;
  margin: 10px 0 5px 0;
`

const MovieReleaseDate = styled.p`
  color: lightgray;
  font-size: 0.8rem;
  margin: 0;
`

const NowplayingPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(Nowplaying.results);
    },[]);

    return (
        <MoiveList>
            {movies.map((movie)=> (
                <MovieCard key={movie.id}>
                    <MoviePoster 
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    />
                    <MovieTitle>{moive.title}</MovieTitle>
                    <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
                </MovieCard>
            ))}
        </MoiveList>

    );
};

export default NowplayingPage;
