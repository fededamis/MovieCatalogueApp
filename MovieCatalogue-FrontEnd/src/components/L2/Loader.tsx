import { CSSProperties, FC } from "react";
import { BeatLoader } from "react-spinners";

const loaderStyle: CSSProperties = {
    marginTop: "10rem"
};

const Loader: FC = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center" style={loaderStyle}>
                <p>Loading...</p>
                <BeatLoader color="cornflowerblue" size={24} />
            </div>
        </>
    );
};

export default Loader;
