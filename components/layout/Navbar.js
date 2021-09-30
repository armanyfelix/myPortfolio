import { useState, useEffect } from 'react';
import Image from 'next/image';

function Navbar() {

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("top").style.top = "0";
                document.getElementById("top").style.transition = "top 0.6s";
            } else {
                document.getElementById("top").style.top = "-70px";
            }
            prevScrollpos = currentScrollPos;
        }
    }, [])
    const [Menu, setMenu] = useState(false);

    return (
        <>
            <header id="top" className="w-full flex flex-col z-20 fixed top-0 shadow-xl backdrop-filter backdrop-blur backdrop-brightness-90  bg-opacity-10 ">
                <nav id="site-menu" className="flex flex-col sm:flex-row w-full justify-between items-center lg:px-28 md:px-16 px-6">
                    <div className="w-full sm:w-auto self-start  sm:self-center w flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                        <a href="#" className="no-underline flex items-center py-1">
                            <Image src="/icons/skull-38-64.png" width="40" height="40" alt="skull" />
                        </a>
                        <button id="menuBtn" aria-label="menu" className={`hamburger block sm:hidden focus:outline-none ${Menu ? "open" : ""}`} onClick={() => setMenu(!Menu)}>
                            <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span>
                        </button>
                    </div>
                    <div className={`w-full sm:w-auto  font-bold   text-white self-end  sm:self-center sm:flex flex-col sm:flex-row items-center    
                        ${Menu ? "flex " : "hidden space-x-10"}`} onClick={() => setMenu(!Menu)}>
                        <a href="#proyects" className="text-center font-simplex text-xl items-center hover:text-blue-600 hover:-translate-y-1 duration-500 ease-in-out">
                            <span className="font-bold font-simplex">Proyects</span>
                        </a>
                        <a href="#about" className=" text-center text-xl font-simplex items-center hover:text-indigo-600 hover:-translate-y-1 duration-500 ease-in-out">
                            <span className="font-simplex font-bold">About</span>
                        </a>
                        <a href="#contact" className="text-center text-xl font-simplex items-center hover:text-purple-600 hover:-translate-y-1 duration-500 ease-in-out">
                            <span className="font-simplex font-bold">Contact</span>
                        </a>
                    </div>
                </nav>
            </header>
            <style jsx>{`
                .nav-sticky {
                    position: fixed!important;
                    min-width: 100%;
                    top: 0;
                    box-shadow: 0 2px 4px 0 rgba(255, 0, 0, .1);
                    transition: all .25s ease-in;
                    z-index: 1;
                }
                }
                /* HAMBURGER MENU */
                .hamburger {
                cursor: pointer;
                width: 48px;
                height: 48px;
                transition: all 0.25s;
                }
                .hamburger__top-bun,
                .hamburger__bottom-bun {
                content: '';
                position: absolute;
                width: 24px;
                height: 2px;
                background: #fff;
                transform: rotate(0);
                transition: all 0.5s;
                }
                .hamburger:hover [className*="-bun"] {
                background: #333;
                }
                .hamburger__top-bun {
                transform: translateY(-5px);
                }   
                .hamburger__bottom-bun {
                transform: translateY(3px);
                }  
                .open {
                transform: rotate(90deg);
                transform: translateY(-1px);
                } 
                .open .hamburger__top-bun {
                transform:
                    rotate(45deg)
                    translateY(0px);
                }    
                .open .hamburger__bottom-bun {
                transform:
                    rotate(-45deg)
                    translateY(0px);
                }
            `}</style>
        </>
    )
}

export default Navbar