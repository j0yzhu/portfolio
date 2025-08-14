import {useState} from "react";
import {Link, Outlet} from "react-router";
import {ModeToggle} from "@/components/ui/mode-toggle.tsx";
import pig from "./assets/HomePageImages/Pig.png";
import {Squash as Hamburger} from "hamburger-react";

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div
                className="w-full bg-background/80 backdrop-blur px-4 py-2 flex items-center justify-between border-b relative">
                    <Link to={"/"}>
                        <img className="w-16" src={pig} alt="Home"/>
                    </Link>
                {/* Desktop links */}
                <div className="hidden md:flex gap-6 items-center flex-1 justify-around ">
                    <Link to={"/about"} className="text-3xl font-semibold font-serif">
                        About
                    </Link>
                    <Link to={"/Projects"} className="text-3xl font-semibold font-serif">
                        Projects
                    </Link>
                    <Link to={"/Leadership"} className="text-3xl font-semibold font-serif">
                        Leadership
                    </Link>
                    <Link to={"/Gallery"} className="text-3xl font-semibold font-serif">
                        Gallery
                    </Link>

                </div>

                <div className="hidden md:block z-50">
                    <ModeToggle/>
                </div>

                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>
            {/* Right-side popout menu */}
            <div
                className={`fixed bg-accent top-0 right-0 h-full w-64 z-50 border transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Mobile hamburger */}
                <div className="flex items-center justify-between pr-3">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    <ModeToggle />
                </div>


                <div className="p-6 flex flex-col gap-6 text-lg font-serif font-bold text-foreground">
                    <Link to={"/about"} onClick={() => setOpen(false)}>
                        About
                    </Link>
                    <Link to={"/Projects"} onClick={() => setOpen(false)}>
                        Projects
                    </Link>
                    <Link to={"/Leadership"} onClick={() => setOpen(false)}>
                        Leadership
                    </Link>
                    <Link to={"/Gallery"} onClick={() => setOpen(false)}>
                        Gallery
                    </Link>
                </div>
            </div>
        </>
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
