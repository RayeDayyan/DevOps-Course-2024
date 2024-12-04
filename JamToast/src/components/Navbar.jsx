import { useState } from 'react';
import { Menu, X } from "lucide-react"
import logo from '../assets/jammtoastlogo.png';
import {Link} from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <header className="bg-gradient-to-b from-[#000000] to-black text-white shadow-lg relative">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <img
                            src={logo}  // Replace with the actual path to your logo
                            alt="Logo"
                            className="w-full h-full object-cover shadow-white"  // This ensures the logo fits and adds a shadow effect
                        />
                    </div>
                    <span className="text-2xl font-bold text-[#c0fa4c]">
                       <Link to='/'>Jamm.Toast</Link>
                    </span>
                </div>
                <button
                    className="md:hidden text-white focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} color="#ffffff" /> : <Menu size={28} color="#ffffff" />}
                </button>
                <nav
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-[#000000] md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out`}
                >
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 p-4 md:p-0">
                        {['Services', 'Projects','Clients', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`/#${item.toLowerCase()}`}
                                    className="block text-[#ffffff] hover:text-[#c0fa4c] transition-colors duration-200 ease-in-out font-sans text-lg"
                                    onClick={toggleMenu}
                                >
                                    {item}
                                </a>
                            </li>
                            
                        ))}
                        <li>
                            <Link to='/team' className="block text-[#ffffff] hover:text-[#c0fa4c] transition-colors duration-200 ease-in-out font-medium text-lg">Team</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}