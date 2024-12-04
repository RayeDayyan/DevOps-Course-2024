import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

//images
import shahrozPic from "../assets/teamPics/shahroz.jpg";
import maimoonaPic from "../assets/teamPics/maimoona.png";
import hamzaPic from "../assets/teamPics/hamza.jpeg";
import haniPic from "../assets/teamPics/hani.png";
import gridDark from "../assets/grid-bg-dark.png";
import whitegrid from "../assets/whiteBGwithPatterns.png";

const Team = () => {
    const [flipped, setFlipped] = useState(null); // Track which card is flipped

    const teamMembers = [
        {
            name: "Shahroz Shoaib",
            role: "Founder",
            image: shahrozPic,
            bio: "Shahroz has over 15 years of experience in digital marketing and web development. He founded JammToast to help businesses thrive in the digital world.",
            linkedIn: "https://www.linkedin.com/in/shahroz-shoaib-59794922b/",
            contact: "shahroz@jammtoast.com"
        },
        {
            name: "Maimoona Ashar",
            role: "Marketing Director",
            image: maimoonaPic,
            bio: "Maimoona is a creative powerhouse with a keen eye for aesthetics. He ensures that every JammToast project is visually stunning and user-friendly.",
            linkedIn: "https://www.linkedin.com/in/maimoona-ashar-4451b3247/",
            contact: "maimoona@jammtoast.com"
        },
        {
            name: "Hamza Iqbal",
            role: "Marketing Director",
            image: hamzaPic,
            bio: "Hamza is a full-stack developer with expertise in the latest web technologies. He turns complex ideas into elegant, efficient code.",
            linkedIn: "https://www.linkedin.com/in/hamza-iqbal-1bb20b274/",
            contact: "taylor@jammtoast.com"
        },
        {
            name: "Muhammad Hani",
            role: "Marketing Director",
            image: haniPic,
            bio: "Hani is our social media guru, crafting engaging content and strategies that help our clients connect with their audience.",
            linkedIn: "https://www.linkedin.com/in/muhammad-hani-b5512a23a/",
            contact: "jordan@jammtoast.com"
        }
    ];

    const handleCardClick = (index) => {
        setFlipped(flipped === index ? null : index); // Toggle card flipping
    };

    return (
        <div className="bg-[#ffffff] min-h-screen text-[#4A3E37]">
            <Navbar />
            <section className="py-10 bg-[#ffffff]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-[#000000] mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                style={{ perspective: '1000px' }} // Adding perspective here
                                className="cursor-pointer"
                            >
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%', // Full width
                                        height: '400px', // Adjust height for 5:4 ratio
                                        transition: 'transform 0.6s',
                                        transformStyle: 'preserve-3d',
                                        transform: flipped === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                    }}
                                >
                                    {/* Front of the card */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            backfaceVisibility: 'hidden',
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '0.5rem',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white bg-black bg-opacity-50">
                                            <div className='mb-8'>
                                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                                <p className="text-sm">{member.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back of the card */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            backfaceVisibility: 'hidden',
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${gridDark})`, // Add the background image
                                            backgroundSize: 'cover', // Cover the entire div
                                            backgroundPosition: 'center', // Center the image
                                            color: 'white',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '0.5rem',
                                            padding: '1rem',
                                            transform: 'rotateY(180deg)', // This rotates the back side
                                        }}
                                    >
                                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                        <p className="mb-2">{member.role}</p>
                                        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="mb-2">
                                            <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 w-6 h-6" />
                                        </a>
                                        <p className="text-sm text-center mt-2 font-light">{member.bio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Team;
