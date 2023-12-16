import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Root = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = `w-full navbar z-30 fixed top-0 left-0 right-0 max-w-7xl mx-auto ${scrolled ? 'bg-base-300' : ' text-white'
        }`;

    const navItems = <>
        <li>
            <a className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black  bg-secondary" : ""
            } href="#header">Home</a>
        </li>
        <li>
            <a href="#about" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black  bg-secondary" : ""
            } to="/about">About</a>
        </li>
        <li>
            <a href="#projects" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black  bg-secondary" : ""
            } >Projects</a>
        </li>
        <li>
            <a className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black  bg-secondary" : ""
            } href="#mySkill">My Skill</a>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black  bg-secondary" : ""
            } to="/blogs">Blogs</NavLink>
        </li>
        <li>
            <a href="#Contact" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black  bg-secondary" : ""
            } >Contact</a>
        </li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className={navbarClass}>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 text-2xl font-semibold px-2 mx-2">
                        Forhad Islam
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navItems}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Root;