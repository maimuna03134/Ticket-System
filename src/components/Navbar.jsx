import React from "react";
import Container from "./Container";


const Navbar = () => {
    return (
        <div className="bg-white  shadow border-b-[0.5px] border-gray-300">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="lg:hidden">
                            <div className="dropdown">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost focus:outline-none lg:hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content text-center rounded-box z-10 mt-3 w-40 shadow bg-white"
                                >
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="">Changelog</a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                    <li>
                                        <a href="">Download</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a>
                            <h1 className="md:text-xl text-sm font-bold space-x-1 sm:space-x-0">
                                CS — Ticket System
                            </h1>
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="hidden sm:block">
                            <ul className="menu-horizontal px-1 text-sm space-x-2">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">FAQ</a>
                                </li>
                                <li>
                                    <a href="">Changelog</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Download</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-2">
                            <button className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white px-4 py-2  rounded-lg hover:cursor-pointer">
                                + New Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
