import { CSSProperties, FC } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: "calc(0.6em + 0.5vw)",
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: { 
                root: { 
                    cursor: "default",
                    '&.Mui-selected': {backgroundColor:"#8f34eb"},
                    '&.Mui-selected:hover': {backgroundColor:"#8f34eb"},
                } 
            },
        }        
    },
});

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
            <ThemeProvider theme={theme}>
                <ListItemButton
                    onClick={() => onMovieSelected && onMovieSelected(movieid)}
                    selected={selected}
                    style={listItemButtonStyle}
                >
                    <ListItemText primary={title} />
                </ListItemButton>
            </ThemeProvider>
            <Divider />
        </>
    );
};

export default MovieItem;
