import { CSSProperties, FC } from "react";
import MovieItem, { MovieItemProps } from "../L3/MovieItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

const movieListStyles: CSSProperties = {
    backgroundColor: "#c2b8f2",
    height: "100%",
    paddingTop: "1em",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
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
            <Box
                sx={{
                    width: "100%",
                    bgcolor: "#a396e3",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                }}
            >
                <List
                    component="nav"
                    aria-label="main mailbox folders"
                    sx={{ paddingTop: "0", paddingBottom: "0" }}
                >
                    {movieItemList.map(({ movieid, title }) => {
                        return (
                            <MovieItem
                                key={movieid}
                                movieid={movieid}
                                title={title}
                                selected={movieid === selectedMovieId}
                                onMovieSelected={onMovieSelected}
                            />
                        );
                    })}
                </List>
            </Box>
        </div>
    );
};

export default MovieList;
