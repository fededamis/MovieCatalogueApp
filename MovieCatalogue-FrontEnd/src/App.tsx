import Header from "./components/L1/Header";
import MovieCatalogue from "./components/L1/MovieCatalog";
import data from "./test-json/movie-samples.json";

function App() {
    return (
        <>
            <Header />
            <MovieCatalogue movieListData={data} />
        </>
    );
}

export default App;
