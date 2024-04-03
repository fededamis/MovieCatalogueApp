import { FC, CSSProperties } from "react";

export type MovieInfoProps = {
    label: string;
    value: string;
};

const movieInfoStyle: CSSProperties = {
  fontSize: "calc(0.7em + 0.5vw)",
};

const MovieInfo: FC<MovieInfoProps> = ({ label, value }) => {
    return (
        <div style={movieInfoStyle}>
            <span>
                <strong>{`${label}: `}</strong>
            </span>
            <span>{value}</span>
        </div>
    );
};

export default MovieInfo;
