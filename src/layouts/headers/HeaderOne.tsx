"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";
import UseSticky from "@/hooks/UseSticky";
import { useTheme } from "@/context/ThemeContext";

import logo_1 from "@/assets/images/logo/StraticFlowlogomain.png";
import logo_2 from "@/assets/images/logo/white-logo.png";

const HeaderOne = () => {
    const { sticky } = UseSticky();
    const [offCanvas, setOffCanvas] = useState<boolean>(false);
    const [isBreakpointOn, setIsBreakpointOn] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            setIsBreakpointOn(window.innerWidth < 1200);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const logo = theme === 'dark' ? logo_2 : logo_1;

    return (
        <header className={`transparent-header ${theme === 'dark' ? "navigation-white" : ""}`}>
            <div className={`header-navigation navigation-default ${isBreakpointOn ? "breakpoint-on d-block d-xl-none" : ""} ${sticky ? "sticky" : ""}`} >
                <div onClick={() => setOffCanvas(false)} className={`nav-overlay ${offCanvas ? "active" : ""} `}></div>
                <div className="ac-header-one__main">
                    <div className="container">
                        <div className="ac-header-one__main-wrapper">
                            <div className="ac-header-one__left">
                                <div className="ac-header-one__logo">
                                 
                                    <Link href="/"><Image src={logo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="ac-header-one__right">
                                <div className="ac-header-one__right-menu d-flex align-items-center">
                                    <div className={`ac-nav-menu ${offCanvas ? "menu-on" : ""}`}>
                                        <div className="site-branding d-block d-xl-none text-center mb-30">
                                            <Link href="/"><Image src={logo_1} alt="logo" /></Link>
                                        </div>
                                        <nav className="main-menu">
                                            <NavMenu />
                                        </nav>
                                        <div className="nav-button d-block d-xl-none mt-30">
                                            <Link href="/contact" className="theme-btn gradient-btn">Start Writing</Link>
                                        </div>
                                    </div>
                                    <div className="ac-header-one__right-btn style-one d-flex">
                                        <div className="ac-dark-btn">
                                            <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '18px' }}>
                                                {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
                                            </button>
                                        </div>
                                        <div className="ac-header-bnt-1">
                                            <Link href="/login">Login</Link>
                                        </div>
                                        <div className="ac-header-bnt-2 d-none d-md-block">
                                            <Link href="/contact" className="theme-btn gradient-btn">Start Writing</Link>
                                        </div>
                                        <div onClick={() => setOffCanvas(true)} className={`navbar-toggler ${offCanvas ? "active" : ""}`}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderOne