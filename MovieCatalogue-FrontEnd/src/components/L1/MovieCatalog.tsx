import { CSSProperties, FC, useState } from "react";

import MovieList from "../L2/MovieList";
import MoviePreview from "../L2/MoviePreview";

const movieCatalogueWrapperStyle: CSSProperties = {
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
};

const movieSectionWrapperStyle: CSSProperties = {    
    height: "calc(94vh - 60px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const moviePreviewWrapperStyle: CSSProperties = {
    ...movieSectionWrapperStyle,
    flex: "1 1 70%",
    textAlign: "center",    
    alignSelf: "flex-start",
};

const movieListWrapperStyle: CSSProperties = {
    ...movieSectionWrapperStyle,
    flex: "1 1 30%",
    textAlign: "left",
    alignSelf: "flex-end",
};

type MovieData = {
    title: string;
    year: string;
    movieid: string;
    posterurl: string;
    director: string;
    casts: string;
    genre: string;
};

type MovieCatalogueProps = {
    movieListData: MovieData[];
};

const MovieCatalogue: FC<MovieCatalogueProps> = ({ movieListData }) => {
    //React Hook
    const [selectedMovieId, setSelectedMovieId] = useState<string>(
        movieListData.length > 0 ? movieListData[0].movieid : ''
    );

    const selectedMovie =
        movieListData.find((movie) => movie.movieid === selectedMovieId) ||
        movieListData[0];

    const { title, posterurl, year, director, casts, genre } = selectedMovie || '';      

    return (
        <div style={movieCatalogueWrapperStyle}>

            <div style={moviePreviewWrapperStyle}>
                <MoviePreview
                    movieTitle={title}
                    posterUrl={posterurl}
                    releaseYear={year}
                    director={director}
                    casts={casts}
                    genre={genre}
                />
            </div>

            <div style={movieListWrapperStyle}>
                <MovieList
                    movieItemList={movieListData}
                    onMovieSelected={setSelectedMovieId}
                    selectedMovieId={selectedMovieId}
                />
            </div>
        </div>
    );
};

export default MovieCatalogue;
