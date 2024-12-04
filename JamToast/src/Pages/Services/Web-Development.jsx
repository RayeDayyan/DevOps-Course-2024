import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import webDevBg from "../../assets/web-dev-bg.png";
import { useEffect, useState } from "react";
import TypingText from "../../components/TypingText.jsx";
import GetInTouch from "../../components/Get-in-Touch.jsx";

const WebDevelopment = () => {
    return (
        <div className="bg-[#ffffff] min-h-screen text-[#4A3E37] flex flex-col ">
            <Navbar />
            <section
                className="py-10 bg-cover bg-fixed w-full text-center justify-center items-center"
                style={{
                    backgroundImage: `url(${webDevBg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >

                <div className="container mx-auto px-4 text-center">
                    <TypingText text="Web Development" />
                    <p className="text-2xl text-[#ffffff] mb-8">From branding to deployment, we are your one-stop digital solution.</p>
                </div>
            </section>
            <br />
            <br />
            <div className="container mx-auto px-4 text-left">
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    At <span className="font-bold">JammToast</span>, we pride ourselves on blending industry best practices with our own innovative strategies to meet the unique needs of our clients. Our team works closely with you, ensuring a seamless handover and empowering your in-house team with the tools and knowledge to manage, maintain, and grow your digital assets independently.
                </p>

                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    Our developers are experts in their respective platforms and continuously update their certifications to stay at the forefront of industry standards. We’re proud to have specialists across various domains, providing expertise that ensures high-quality solutions tailored to your business needs.
                </p>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2">Custom designs tailored to your brand</li>
                    <li className="mb-2">Responsive and mobile-friendly layouts</li>
                    <li className="mb-2">SEO optimized for better visibility</li>
                    <li className="mb-2">High performance and fast loading speeds</li>
                    <li className="mb-2">Dedicated support and maintenance</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4 mt-8">How we do Web Development?</h2>
                <h2 className="text-2xl font-semibold text-[#000000] max-w-4xl mx-auto mb-4 mt-3">Frontend Development:</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    Our front-end team focuses on performance, accessibility, and user experience. We utilize technologies like <span className="font-bold">React, Next.js, and MERN</span>  to ensure your site is responsive and future-proof. On the back-end, we excel in Node.js, Laravel, and creating secure APIs that integrate seamlessly with your systems.
                </p>

                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    From concept to launch, we guarantee that your website is built to deliver exceptional results, aligning with your business goals and offering a seamless user experience.
                </p>

                <h2 className="text-2xl font-semibold text-[#000000] max-w-4xl mx-auto mb-4 mt-10">Back-End and Integration Development:</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    JammToast’s back-end team specializes in <span className="font-bold">Node.js, PHP, and custom API integrations.</span> Whether you need a high-performance CMS or secure third-party system integrations, our experienced developers ensure your site runs smoothly and securely.                </p>

                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    We excel at building RESTful APIs, complete with detailed documentation and strong security practices. Using tools like Postman for testing and collaboration, our dedicated QA team ensures everything we deliver meets the highest standards.
                </p>
                <br />
                <p className="text-lg text-gray-700 mb-20 max-w-4xl mx-auto">
                    Let JammToast handle your entire digital ecosystem — from stunning, responsive front-end development to secure and reliable back-end integrations. We’re committed to delivering solutions that drive business growth.                </p>
            </div>
            <GetInTouch/>
            <Footer/>
        </div>
    );
};

export default WebDevelopment;
