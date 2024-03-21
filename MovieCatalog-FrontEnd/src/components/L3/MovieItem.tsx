import { CSSProperties, FC } from "react";

const movieItemStyle = (selected?: boolean): CSSProperties => {
    return {
        backgroundColor: selected ? "#055578" : "#42095e",
        fontWeight: selected ? "bold" : "normal",
        fontSize: "calc(0.6em + 0.7vw)",
        cursor: "pointer",
        paddingLeft: "0.75em",
        paddingRight: "0.75em",
        paddingTop: "0.2em",
        paddingBottom: "0.2em",
        color: "#fcfcfc",
    };
};

export type MovieItemProps = {
    id: string;
    title: string;
    selected?: boolean;
    onMovieSelected?: Function;
};

const MovieItem: FC<MovieItemProps> = ({
    id,
    title,
    selected,
    onMovieSelected,
}) => {
    return (
        <div
            onClick={() => onMovieSelected && onMovieSelected(id)}
            style={movieItemStyle(selected)}
        >
            {title}
        </div>
    );
};

export default MovieItem;
