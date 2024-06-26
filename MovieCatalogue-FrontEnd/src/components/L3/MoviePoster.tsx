import { FC } from "react";

const moviePosterStyle = {
    borderRadius: "5%",
    maxWidth: "fit-content",
    maxHeight: "60vh",
    width: "inherit",
    height: "auto",
};

export type MoviePosterProps = {
    movieTitle: string;
    posterUrl: string;
};

const MoviePoster: FC<MoviePosterProps> = ({ movieTitle, posterUrl }) => {
    return <img style={moviePosterStyle} src={posterUrl} alt={movieTitle} />;
};

export default MoviePoster;
