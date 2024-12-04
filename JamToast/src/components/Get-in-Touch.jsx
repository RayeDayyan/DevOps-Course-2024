import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import whitegrid from "../assets/whiteBGwithPatterns.png";

export default function GetInTouch() {
    return (
        <section className="bg-[#ffffff] text-black py-4 bg-cover bg-fixed"
            style={{
                backgroundImage: `url(${whitegrid})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4 text-lg font-semibold text-[#1e3308]">Want to take your brand to the next level? Let's start a conversation. Reach out to us and see how we can help your brand shine.</p>
                <div className="flex justify-center items-center space-x-4">
                    <button className="border-2 border-[#2f2f2f] bg-[#2f2f2f] hover:bg-[#9dff3c] hover:text-black text-white px-6 py-3 rounded-md text-lg font-semibold transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}
