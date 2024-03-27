import { CSSProperties, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export const headerHeight = "60px";

const HeaderStyle: CSSProperties = {
    height: headerHeight,
    backgroundColor: "#20232a",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
};

const HeaderIconStyle: CSSProperties = {
    fontSize: "2rem",
    paddingLeft: "1rem",
    color: "cornflowerblue",
};

const Header: FC = () => {
    return (
        <div className="header" style={HeaderStyle}>
            <h1>Movie Catalogue </h1>
            <FontAwesomeIcon
                icon={faFilm}
                bounce
                size="2xl"
                style={HeaderIconStyle}
            />
        </div>
    );
};

export default Header;
