import React from 'react';
import inProgressBg from '../assets/leftbg.png'
import resolvedBg from '../assets/rightbg.png'
import Container from './Container';


const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-5 my-12">
                {/* in-progress card — Left gradient: #632EE3 → #9F62F2 */}
                <div
                    className="banner-style"
                    style={{
                        backgroundImage: `
                            linear-gradient(135deg, #632EE3, #9F62F2),
                            url(${inProgressBg})
                        `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundBlendMode: "overlay",
                    }}
                >
                    <span className="text-sm">In-Progress</span>
                    <span className="text-3xl font-bold mt-2">{inProgressCount}</span>
                </div>

                {/* resolved card — Right gradient: #54CF68 → #00827A */}
                <div
                    className="banner-style"
                    style={{
                        backgroundImage: `
                            linear-gradient(135deg, #54CF68, #00827A),
                            url(${resolvedBg})
                        `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundBlendMode: "overlay",
                    }}
                >
                    <span className="text-sm">Resolved</span>
                    <span className="text-3xl font-bold mt-2">{resolvedCount}</span>
                </div>
            </div>
        </Container>
    );
};

export default Banner;