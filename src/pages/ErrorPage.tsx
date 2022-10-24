import { Link } from "react-router-dom";
import { getCurrentTheme } from "../lib/themeChanger";


function ErrorPage() {
    const isDarkMode = getCurrentTheme()

    return (
        <div className="hero min-h-screen" data-theme={isDarkMode ? "night" : "cupcake"}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-8xl font-bold text-error">Oops!</h1>
                    <div className="py-8 text-xl">
                        <p className="text-warning">
                            <span>Me perdoa, mas essa página não existe!</span>
                            <br />
                            <span>Volte para a página inicial clicando no botão abaixo.</span>
                        </p>
                    </div>
                    <Link to="/">
                        <button className="btn btn-error btn-outline btn-lg btn-wide">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;