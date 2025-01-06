import { useState } from "react";
import axios from "axios";
import { MOVIES } from "../mocks/movies";

const MoviesPage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,{
                headers:{
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTQ2YWJkNTYyZjliMzk5MjBmMzczOWI2ZmQ2MDg5NCIsIm5iZiI6MTcyODIzNDI4Ni45ODg5OTk4LCJzdWIiOiI2NzAyYzMyZTc4MzBjMTMwMWU3ZDQ2YjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.inqg1KsPlccwcKsSzKE-0M_LP-lsNUfgEMSx8cxjERQ`,
                }
            })
            setMovies(movies);
        }
        getMovies()
    },[]);

    return (
        <>
            <div className="app-container">
                <div className="movie-list">
                    {MOVIES.results.map((movie)=> (
                    <div key={movie.id} className="movie-card">
                        <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className="movie-poster"
                        />
                        <div className="overlay"></div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MoviesPage;
