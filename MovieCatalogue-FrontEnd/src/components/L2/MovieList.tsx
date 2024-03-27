import { CSSProperties, FC } from "react";
import MovieItem, { MovieItemProps } from "../L3/MovieItem";

const movieListStyles: CSSProperties = {
    backgroundColor: "#42095e",
    height: "100%",
    paddingTop: "1em",
    width: "100%",
    display: "flex",
    flexDirection: "column",
};

type MovieListProps = {
    movieItemList: Omit<MovieItemProps, "onItemClicked">[];
    selectedMovieId: string;
    onMovieSelected: Function;
};

const MovieList: FC<MovieListProps> = ({
    movieItemList,
    selectedMovieId,
    onMovieSelected,
}) => {
    return (
    <div style={movieListStyles}>
    {        
        movieItemList.map(({movieid, title}) => {
            return (
                <MovieItem
                key={movieid}
                movieid={movieid}
                title={title}
                selected = {movieid === selectedMovieId}
                onMovieSelected={onMovieSelected}
                />
            )
        })
    }
    </div>)
};

export default MovieList;
