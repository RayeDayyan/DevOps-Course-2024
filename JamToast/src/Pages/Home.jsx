import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Briefcase, Cloud, Code, Globe, Palette, Send } from "lucide-react";
import ServiceCard from "../components/ServiceCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import grid from "../assets/grid-bg.png";
import whitegrid from "../assets/whiteBGwithPatterns.png";
// import proj1 from "../assets/jobs.jpg";
import web1 from "../assets/WebDev/3.jpg";
import purlWebsitePic from "../assets/purlWebsite.png";
import purlShoot from "../assets/purl-fashion-shoot/purl (1).jpg";
import spread2 from "../assets/spread/spread (2).jpg";
import baked from "../assets/baked/baked (1).jpg";
import brandingPic from "../assets/branding.png";
import { Link } from 'react-router-dom';
import TypingText from "../components/TypingText.jsx";
import ClientsLogo from "../components/ClientsLogo.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCode, faMobileAlt, faCloud, faPalette, faFileAlt, faLightbulb, faShareAlt, faCamera, faPen, faDrawPolygon } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
    return (
        <div className="bg-[#ccff66] min-h-screen text-[#4A3E37]">
            <Navbar />

            <main>
                <section
                    className="py-20 bg-cover bg-fixed"
                    style={{
                        backgroundImage: `url(${grid})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="container mx-auto px-4 text-center">
                        <TypingText text="Crafting Digital Excellence" />
                        <p className="text-2xl text-[#ffffff] mb-8">From branding to deployment, we are your one-stop digital solution.</p>
                        <div className="relative max-w-5xl mx-auto mb-8"></div>
                        {/* <button className="bg-[#2f2f2f] hover:bg-[#9dff3c] text-white px-6 py-3 rounded-md text-lg font-semibold">
                            Get Started
                        </button> */}
                    </div>
                </section>

                {/* -------------------------------------------------------   SERVICES    ----------------------------------------------------- */}
                {/* --------------------------------------------------------------------------------------------------------------------------- */}
                <section id="services" className="py-20 bg-[#ffffff]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-[#000000] mb-12">
                            Our Services
                        </h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            <Link to="/brand-strategy" className="transition-transform transform hover:scale-105">
                                <ServiceCard
                                    icon={<FontAwesomeIcon icon={faBullhorn} className="w-8 h-8 mb-4 text-[#2a2a2a]" />}
                                    title="Brand Strategy"
                                    description="Position your brand as a market leader with strategic insights."
                                />
                            </Link>

                            <Link to="/web-development" className="transition-transform transform hover:scale-105">
                                <ServiceCard
                                    icon={<FontAwesomeIcon icon={faCode} className="w-8 h-8 mb-4 text-[#2a2a2a]" />}
                                    title="Website Development"
                                    description="Build responsive and user-friendly websites."
                                />
                            </Link>

                            <Link to="/app-development" className="transition-transform transform hover:scale-105">
                                <ServiceCard
                                    icon={<FontAwesomeIcon icon={faMobileAlt} className="w-8 h-8 mb-4 text-[#2a2a2a]" />}
                                    title="Mobile Application Development"
                                    description="Develop custom applications for web and mobile."
                                />
                            </Link>

                            <Link to="/cloud" className="transition-transform transform hover:scale-105">
                                <ServiceCard
                                    icon={<FontAwesomeIcon icon={faCloud} className="w-8 h-8 mb-4 text-[#2a2a2a]" />}
                                    title="Cloud Deployment and DevOps"
                                    description="Seamlessly deploy and manage your apps in the cloud."
                                />
                            </Link>

                            <Link to="/content-creation" className="transition-transform transform hover:scale-105">
                                <ServiceCard
                                    icon={<FontAwesomeIcon icon={faDrawPolygon} className="w-8 h-8 mb-4 text-[#2a2a2a]" />}
                                    title="Content Creation"
                                    description="Engage your audience with captivating content that tells your brand's story and drives conversions."
                                />
                            </Link>

                            <Link to="/digital-compaigns" className="transition-transform transform hover:scale-105">
                                <ServiceCard
                                    icon={<FontAwesomeIcon icon={faBullhorn} className="w-8 h-8 mb-4 text-[#2a2a2a]" />}
                                    title="Digital Campaigns"
                                    description="Engage your audience with captivating content that tells your brand's story and drives conversions."
                                />
                            </Link>

                            <Link to="/social-media-management" className="transition-transform transform hover:scale-105">
                                <ServiceCard
                                    icon={<FontAwesomeIcon icon={faShareAlt} className="w-8 h-8 mb-4 text-[#2a2a2a]" />}
                                    title="Social Media Management"
                                    description="Engage your audience with captivating content that tells your brand's story and drives conversions."
                                />
                            </Link>

                            <Link to="/story-telling" className="transition-transform transform hover:scale-105">
                                <ServiceCard
                                    icon={<FontAwesomeIcon icon={faCamera} className="w-8 h-8 mb-4 text-[#2a2a2a]" />}
                                    title="Creative Campaigns & Visual Storytellig"
                                    description="Captivating content that tells your brand's story."
                                />
                            </Link>
                        </div>
                    </div>
                </section>




                {/* -------------------------------------------------------   CLIENTS     ----------------------------------------------------- */}
                {/* --------------------------------------------------------------------------------------------------------------------------- */}
                <section id="clients" className="py-20 bg-cover bg-fixed"
                    style={{
                        backgroundImage: `url(${whitegrid})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-12">Our Clients</h2>
                    <ClientsLogo />
                </section>

                {/* -------------------------------------------------------   PROJECTS    ----------------------------------------------------- */}
                {/* --------------------------------------------------------------------------------------------------------------------------- */}
                <section id="projects" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-[#000000] mb-12">Our Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ProjectCard title="Mobile App" category="App Development" image={brandingPic} />
                            
                            <Link to="/projects/purl-clothing-brand">
                                <ProjectCard title="Purlbym - Clothing Brand" category="Web Development" image={purlWebsitePic} />
                            </Link>

                            <Link to="/projects/spread">
                                <ProjectCard title="Spread - Fast Food Restauraunt" category="Content Creation" image={spread2} />
                            </Link>

                            <Link to="/projects/baked">
                                <ProjectCard title="Baked - Food & Beverage" category="Food Photography" image={baked} />
                            </Link>

                            <Link to="/projects/purl-fashion-shoot">
                                <ProjectCard title="Purlbym - Clothing Brand" category="Content Creation" image={purlShoot} />
                            </Link>
                            <Link to="/projects/webdev" >
                                <ProjectCard title="Freelance Website" category="Web Development" image={web1} />
                            </Link>
                            {/* <ProjectCard title="SaaS Dashboard" category="Web Development" image={brandingPic} /> */}
                        </div>
                    </div>
                </section>



                {/* ---------------------------------------------------   GET IN TOUCH    ----------------------------------------------------- */}
                {/* --------------------------------------------------------------------------------------------------------------------------- */}
                <section id="contact" className="py-20 bg-cover bg-fixed"
                    style={{
                        backgroundImage: `url(${grid})`, // Replace with your image path
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-[#ffffff] mb-12">Get in Touch</h2>
                        <div className="max-w-md mx-auto">
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c0fa4c]"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c0fa4c]"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c0fa4c]"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-[#2f2f2f] hover:bg-[#686868] text-white px-4 py-2 rounded-md font-semibold flex items-center justify-center"
                                >
                                    Send Message
                                    <Send className="w-4 h-4 ml-2" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

