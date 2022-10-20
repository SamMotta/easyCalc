import hamburgerIcon from "../assets/hamburger.svg"
import closeIcon from "../assets/close.svg"
import sunIcon from "../assets/sun.svg"
import moonIcon from "../assets/moon.svg"

import { Link } from "react-router-dom"

type NavbarProps = {
    isDarkMode: boolean;
    callback?: () => void;
}

function Navbar({ isDarkMode, callback }: NavbarProps) {
    return (
        <nav className="navbar bg-blue-500 mb-4">
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle swap swap-rotate drawer-button">
                {/* Hidden checkbox that controls the state */}
                <input type="checkbox" />

                {/* Hamburger icon */}
                <img className="swap-off fill-current" src={hamburgerIcon} alt="Hamburger Icon" />

                {/* Close/X icon */}
                <img className="swap-on fill-current" src={closeIcon} alt="Cross/X Icon" />

            </label>

            <div className="flex-none">
                <Link to="/" className="btn btn-ghost normal-case text-xl">EasyCalc</Link>
            </div>
            <label className="swap swap-rotate flex-1 justify-end mr-4">

                {/* Hidden checkbox that controls the state */}
                <input type="checkbox" checked={isDarkMode} onChange={callback} />

                {/* Sun icon */}
                <img src={sunIcon} alt="Sun Icon" className="swap-on fill-current swap-active" />

                {/* Moon icon */}
                <img src={moonIcon} alt="Moon Icon" className="swap-off fill-current" />
            </label>
        </nav>
    )
}

export default Navbar