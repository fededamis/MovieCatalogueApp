import { CSSProperties, FC } from "react";

const FooterStyle: CSSProperties = {
    backgroundColor: "rgb(32, 35, 42)",    
    height: "6vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
};

const FooterTextStyle: CSSProperties = {
    color: "white",
    textAlign: "center",    
    marginBottom: "0.5vh",
    fontSize: "calc(0.6em + 0.5vw)",
};

const Footer: FC = () => {
    return (
        <div style={FooterStyle}>
            <p style={FooterTextStyle}>
                Developed by{" "}
                <a
                    href="https://fededamis.github.io/CVDigital/"
                    target="_blank"
                >
                    Federico Damis
                </a>
                . Click{" "}
                <a
                    href="https://github.com/fededamis/MovieCatalogueApp"
                    target="_blank"
                >
                    here
                </a> to see the source code on GitHub.     
                 
            </p>
        </div>
    );
};

export default Footer;
