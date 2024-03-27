import Header from "./components/L1/Header";
import MovieCatalogue from "./components/L1/MovieCatalog";
import test_data from "./test-json/movie-samples.json";
import { useState, useEffect } from "react";

function App() {    

    const [movieData, setMovieData] = useState([]);
    const apiUrl = "https://movie-catalogue-api-latest.onrender.com/GetMovies";    

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovieData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <Header />
            <MovieCatalogue movieListData={movieData} />
        </>
    );
}

export default App;
