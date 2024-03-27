import Header from "./components/L1/Header";
import MovieCatalogue from "./components/L1/MovieCatalog";
import test_data from "./test-json/movie-samples.json";
import { useState, useEffect } from "react";

function App() {
    //debugger;

    const [movieData, setMovieData] = useState([]);
    //const apiUrl = "https://movie-catalogue-api-latest.onrender.com/GetMovies";
    const apiUrl = "https://postman-echo.com/get";

    //fetch('https://api.github.com/users/manishmshiva')
    fetch(apiUrl)
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    

    // fetch(apiUrl, {mode: "no-cors"})
    //         .then((response) => {
    //             debugger;
    //             response.json();
    //         })
    //         .then((data) => {
    //             debugger;
    //             console.log(data);
    //             //setMovieData(data);
    //         })
    //         .catch((err) => {
    //             debugger;
    //             console.log(err.message);
    //         });

    // useEffect(() => {
    //     fetch(apiUrl)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             debugger;
    //             console.log(data);
    //             setMovieData(data);
    //         })
    //         .catch((err) => {
    //             debugger;
    //             console.log(err.message);
    //         });
    // }, []);

    return (
        <>
            <Header />
            <MovieCatalogue movieListData={test_data} />
        </>
    );
}

export default App;
