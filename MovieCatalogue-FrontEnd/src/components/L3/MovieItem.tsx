import { CSSProperties, FC } from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const movieItemStyle = (selected?: boolean): CSSProperties => {
    return {
        backgroundColor: selected ? "#055578" : "#42095e",
        fontWeight: selected ? "bold" : "normal",
        fontSize: "calc(0.6em + 0.7vw)",
        // cursor: "pointer",
        paddingLeft: "0.75em",
        paddingRight: "0.75em",
        paddingTop: "0.2em",
        paddingBottom: "0.2em",
        color: "#fcfcfc",
    };
};

const listItemStyle: CSSProperties = {
    fontSize: "calc(0.6em + 0.7vw)",
};

const listItemButtonStyle: CSSProperties = {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
};

export type MovieItemProps = {
    movieid: string;
    title: string;
    selected?: boolean;
    onMovieSelected?: Function;
};

const MovieItem: FC<MovieItemProps> = ({
    movieid,
    title,
    selected,
    onMovieSelected,
}) => {
    return (
        <>
            <Divider />
            <ListItemButton
                onClick={() => onMovieSelected && onMovieSelected(movieid)}
                selected={selected}                
                style={listItemButtonStyle}
            >
                {/* <ListItemIcon>
                    <StarOutlineRoundedIcon />
                </ListItemIcon> */}

                <ListItemText primary={title} style={listItemStyle} />
            </ListItemButton>
            <Divider />
        </>
    );
};

export default MovieItem;
