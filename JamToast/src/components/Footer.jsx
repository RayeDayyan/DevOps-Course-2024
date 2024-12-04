import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <footer className="bg-[#000000] text-white py-4">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-2">&copy; 2023 Jamm.Toast All rights reserved.</p>
                <div className="flex justify-center items-center space-x-4">
                    {/* LinkedIn Icon */}
                    <a
                        href="https://www.linkedin.com/company/jammtoast" // Replace with your actual LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-lime-500"
                    >
                        <i className="fab fa-linkedin fa-2x"></i> {/* LinkedIn Icon */}
                    </a>
                    {/* Email Icon */}
                    <a
                        href="mailto:business@jammtoast.com"
                        className="text-white hover:text-lime-500"
                    >
                        <i className="fas fa-envelope fa-2x"></i> {/* Email Icon */}
                    </a>
                    {/* Instagram Icon */}
                    <a
                        href="https://www.instagram.com/jammtoast" // Replace with your actual Instagram URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-lime-500"
                    >
                        <i className="fab fa-instagram fa-2x"></i> {/* Instagram Icon */}
                    </a>
                </div>
                <p className="mt-2 text-sm">Location: Your Company Address Here</p>
            </div>
        </footer>
    );
}
