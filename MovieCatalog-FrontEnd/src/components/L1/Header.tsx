import { CSSProperties, FC } from "react";

export const headerHeight = "60px";

const HeaderStyle: CSSProperties = {
  height: headerHeight,
  backgroundColor: "#20232a",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

const HeaderIconStyle: CSSProperties = {
  fontSize: "2rem",
  paddingLeft: "1rem",
  color: "cornflowerblue"
};

const Header: FC = () => {
  return (
    <div className="header" style={HeaderStyle}>         
      <h1>Movie Catalogue </h1>   
      <i className="bi bi-film" style={HeaderIconStyle}></i>      
    </div>
  );
};

export default Header;