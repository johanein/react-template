import './styles.css'
import image from "./normal.png";
import logo from "./logo.svg";

const App = () => {
    return (
        <>
        <img src={image} alt="Normal size" width={300} height={200} />
        <img src={logo} alt="svg logo" width={300} height={200} />
        <h1>
            React Typescript Webpack Starter Template
        </h1>
        </>
    )
}

export {App}
