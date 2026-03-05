import React from 'react';

import {
    FaTwitter,
    FaLinkedinIn,
    FaFacebookF,
    FaEnvelope,
} from "react-icons/fa";
import Container from './Container';


const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-6 py-10 ">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-white font-semibold mb-2">
                            CS — Ticket System
                        </h3>
                        <p className="text-sm">
                            CS — Ticket System simplifies issue tracking, allowing customers
                            to report problems, ask questions, and track requests easily.
                        </p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-white font-semibold mb-2">Company</h4>
                        <ul className="space-y-1 text-sm">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-white font-semibold mb-2">Services</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-white font-semibold mb-2">Information</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Social Links</h4>
                        <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2 text-gray-300">
                                <FaTwitter className="text-white" size={14} />
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <FaLinkedinIn className="text-white" size={14} />
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <FaFacebookF className="text-white" size={14} />
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <FaEnvelope className="text-white" size={14} />
                                <a href="mailto:support@cst.com" className="hover:underline">
                                    support@cst.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-left md:text-center text-gray-500 text-sm mt-8">
                    © 2025 CS — Ticket System. All rights reserved.
                    <br className="block md:hidden" /> All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;