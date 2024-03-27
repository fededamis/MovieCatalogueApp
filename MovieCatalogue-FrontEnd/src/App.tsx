import Header from "./components/L1/Header";
import MovieCatalogue from "./components/L1/MovieCatalog";
import Loader from "./components/L2/Loader";
import test_data from "./test-json/movie-samples.json";
import { useState, useEffect } from "react";

function App() {
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const apiUrl = "https://movie-catalogue-api-latest.onrender.com/GetMovies";

    useEffect(() => {
        setIsLoading(true);
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovieData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <Header />            
            {isLoading && <Loader/>}
            {!isLoading && <MovieCatalogue movieListData={movieData} />}            
        </>
    );
}

export default App;
