import {Link, Outlet} from "react-router";
import {ModeToggle} from "@/components/ui/mode-toggle.tsx";
import pig from "./assets/HomePageImages/Pig.png";

function NavBar() {
    return (
        <div className="w-full bg-background/80 backdrop-blur px-4 py-2 flex items-center justify-between border-b ">
            <Link to={"/"}>
                <img className="w-20 m-2" src={pig} alt="Home"/>
            </Link>
            <Link to={"/about"}>
                <span className="text-3xl font-semibold font-serif">About</span>
            </Link>
            <Link to={"/Projects"}>
                <span className="text-3xl font-semibold font-serif">Projects</span>
            </Link>
            <Link to={"/Leadership"}>
                <span className="text-3xl font-semibold font-serif">Leadership</span>
            </Link>
            <Link to={"/Gallery"}>
                <span className="text-3xl font-semibold font-serif">Gallery</span>
            </Link>
            <ModeToggle/>
        </div>
    );
}

export default function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
}