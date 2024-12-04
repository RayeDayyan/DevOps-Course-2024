import React, { useState } from 'react';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

//purl
import purlWebsitePic from "../../assets/purlWebsite.png"; // Example image import
import purlWebsiteVideo from "../../assets/PurlWebsiteMedia/purl_website_video.mp4"; // Example image import
import purlweb1 from "../../assets/PurlWebsiteMedia/purl1.png"; // Example image import
import purlweb2 from "../../assets/PurlWebsiteMedia/purl2.png"; // Example image import
import purlCart from "../../assets/PurlWebsiteMedia/purl_cart_checkout.png"; // Example image import

//spread
import spread1 from "../../assets/spread/spread (1).jpg"
import spread2 from "../../assets/spread/spread (2).jpg"
import spread3 from "../../assets/spread/spread (3).jpg"
import spread4 from "../../assets/spread/spread (4).jpg"
import spread5 from "../../assets/spread/spread (5).jpg"
import spread6 from "../../assets/spread/spread (6).jpg"
import spread7 from "../../assets/spread/spread (7).jpg"
import spread8 from "../../assets/spread/spread (8).jpg"
import spread9 from "../../assets/spread/spread (9).jpg"
import spread10 from "../../assets/spread/spread (10).jpg"
import spread11 from "../../assets/spread/spread (11).jpg"

//baked
import baked1 from "../../assets/baked/baked (1).jpg"
import baked2 from "../../assets/baked/baked (2).jpg"
import baked3 from "../../assets/baked/baked (3).jpg"
import baked4 from "../../assets/baked/baked (4).jpg"
import baked5 from "../../assets/baked/baked (5).jpg"
import baked6 from "../../assets/baked/baked (6).jpg"
import baked7 from "../../assets/baked/baked (7).jpg"
import baked8 from "../../assets/baked/baked (8).jpg"
import baked9 from "../../assets/baked/baked (9).jpg"
import baked10 from "../../assets/baked/baked (10).jpg"
import baked11 from "../../assets/baked/baked (11).jpg"

//purl
import purl1 from "../../assets/purl-fashion-shoot/purl (1).jpg"
import purl2 from "../../assets/purl-fashion-shoot/purl (2).jpg"
import purl3 from "../../assets/purl-fashion-shoot/purl (3).jpg"
import purl4 from "../../assets/purl-fashion-shoot/purl (4).jpg"
import purl5 from "../../assets/purl-fashion-shoot/purl (5).jpg"
import purl6 from "../../assets/purl-fashion-shoot/purl (6).jpg"
import purl7 from "../../assets/purl-fashion-shoot/purl (7).jpg"
import purl8 from "../../assets/purl-fashion-shoot/purl (8).jpg"
import purl9 from "../../assets/purl-fashion-shoot/purl (9).jpg"
import purl10 from "../../assets/purl-fashion-shoot/purl (10).jpg"
import purl11 from "../../assets/purl-fashion-shoot/purl (11).jpg"

//web dev project
import web1 from "../../assets/WebDev/1.jpg";
import web2 from "../../assets/WebDev/2.jpg";
import web3 from "../../assets/WebDev/3.jpg";
import web4 from "../../assets/WebDev/4.jpg";


import blackGrid from "../../assets/grid-bg-dark.png"; // Example image import
import TypingText from "../../components/TypingText.jsx";

// Example of project details with videos and images
const projectDetails = {
    "purl-clothing-brand": {
        title: "Purlbym - Clothing Brand",
        category: "Web Development",
        link: "https://purlbym.com/",
        description: "PURL is an online store specializing in handmade fashion items, including premium cardigans and crochet bags. The website offers a variety of unique and stylish products, emphasizing quality craftsmanship and exclusivity. Each item is carefully crafted in Pakistan, and the store provides free nationwide delivery. Customers can browse various categories such as new arrivals, vintage shirts, tank tops, and best sellers. PURL also emphasizes customer support and care instructions for their products, ensuring a personalized shopping experience.",
        images: [purlWebsitePic, purlweb1, purlweb2, purlCart], // Images for the project
        video: purlWebsiteVideo, // Imported video for this project
        additionalDescription: "PURL is an online store specializing in handmade fashion items, including premium cardigans and crochet bags. The website offers a variety of unique and stylish products, emphasizing quality craftsmanship and exclusivity. Each item is carefully crafted in Pakistan, and the store provides free nationwide delivery. Customers can browse various categories such as new arrivals, vintage shirts, tank tops, and best sellers. PURL also emphasizes customer support and care instructions for their products, ensuring a personalized shopping experience." // Additional description
    },
    "purl-fashion-shoot": {
        title: "Purlbym - Clothing Brand",
        category: "Content Creation",
        link: "https://purlbym.com/",
        description: "PURL is an online store specializing in handmade fashion items, including premium cardigans and crochet bags. The website offers a variety of unique and stylish products, emphasizing quality craftsmanship and exclusivity. Each item is carefully crafted in Pakistan, and the store provides free nationwide delivery. Customers can browse various categories such as new arrivals, vintage shirts, tank tops, and best sellers. PURL also emphasizes customer support and care instructions for their products, ensuring a personalized shopping experience.",
        images: [purl1, purl2, purl3, purl4, purl5, purl6, purl7, purl8, purl9, purl10], // Images for the project
        video: null, // Imported video for this project
        additionalDescription: "PURL is an online store specializing in handmade fashion items, including premium cardigans and crochet bags. The website offers a variety of unique and stylish products, emphasizing quality craftsmanship and exclusivity. Each item is carefully crafted in Pakistan, and the store provides free nationwide delivery. Customers can browse various categories such as new arrivals, vintage shirts, tank tops, and best sellers. PURL also emphasizes customer support and care instructions for their products, ensuring a personalized shopping experience." // Additional description
    },
    "spread": {
        title: "Spread - Fast Food Restauraunt",
        category: "Content Creation",
        link: null,
        description: "SPREAD is a burger joint known for its creative, bold flavors and unique culinary twists. The brand stands out for delivering a distinctive take on traditional burgers.",
        images: [spread1, spread2, spread3, spread4, spread5, spread6, spread7, spread8, spread9, spread10, spread11,], // Images for the project
        video: null, // Imported video for this project
        additionalDescription: "SPREAD faced the challenge of keeping its audience engaged and driving footfall in a highly competitive market. They needed fresh, creative content that would resonate with both their online audience and in-store customers.", // Additional description
        additionalDescription1: "Jamm Toast provided end-to-end content creation, including video production, photography, and menu design. We developed dynamic and appetizing visuals that reflected the brand’s bold offerings, keeping SPREAD’s social media channels active and its customer base hungry for more." // Additional description
    },

    "baked": {
        title: "Baked - Food & Beverage",
        category: "Food Photography",
        link: null,
        description: "BAKED is a bakery celebrated for its artisanal approach to baking. Known for fresh ingredients and unique recipes, they create a wide range of baked goods that appeal to local food lovers.",
        images: [baked3, baked4, baked5, baked6, baked7, baked8, baked9, baked10, baked11, baked1], // Images for the project
        video: null, // Imported video for this project
        additionalDescription: "BAKED needed mouth-watering visuals that would highlight the quality of their products and help them stand out in the crowded bakery space. They sought a way to convey the taste and quality of their goods through online platforms.", // Additional description
        additionalDescription1: "Jamm Toast delivered high-quality, irresistible product photography that captured the essence of BAKED’s offerings. Our imagery brought their goods to life, driving engagement and foot traffic while enhancing their online appeal." // Additional description
    },
    "webdev": {
        title: "Freelance website",
        category: "Web Development",
        link: null,
        description: "Test",
        images: [web1,web2, web3, web4]
    }
    // Add more project details here...
};

export default function ProjectDetail() {
    const { projectId } = useParams(); // Get the projectId from the URL
    const project = projectDetails[projectId]; // Fetch the project details based on the projectId
    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // State to manage the index of the selected image

    if (!project) {
        return <div>Project not found!</div>;
    }

    // Function to handle image click
    const handleImageClick = (index) => {
        setSelectedImageIndex(index); // Set the index of the selected image
    };

    // Function to handle modal close
    const handleCloseModal = () => {
        setSelectedImageIndex(null); // Reset the selected image index
    };

    // Function to go to the next image
    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    // Function to go to the previous image
    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="bg-gradient-to-r bg-white min-h-screen text-[#ffffff] flex flex-col">
            <Navbar />
            <section className="py-2 bg-cover bg-fixed w-full text-center justify-center items-center"
                style={{
                    backgroundImage: `url(${blackGrid})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                <h2 className="text-2xl text-[#ffffff] pt-5 font-light text-center mb-1">Our Client</h2>
                <TypingText text={project.title} />
                {/* <h1 className="text-5xl text-[#ffffff] pt-2 font-bold text-center mb-4">{project.title}</h1> */}
                <p className="text-lg text-[#cfcfcf] text-center mb-2">Category: {project.category}</p>

                {project.link && (
                    <p className="text-lg text-[#cfcfcf] text-center mb-2">
                        Link:
                        <a
                            href={project.link}
                            className="text-lime-500 ml-2 hover:underline"
                            target="_blank" // Opens link in a new tab
                            rel="noopener noreferrer" // Adds security when using target="_blank"
                        >
                            {project.link}
                        </a>
                    </p>

                )

                }
            </section>


            <br />
            <br />
            <br />


            {/* Conditionally display project video if available */}
            {project.video && (
                <div className="mb-8">
                    <div className="w-full md:w-1/2 mx-auto">
                        <video controls className="w-full h-auto rounded-lg shadow-md">
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            {/* Project description */}
            <div className="mt-8 mx-10">
                <h2 className="text-2xl text-[#000000] leading-relaxed text-center">{project.description}</h2>
            </div>

            {/* Conditionally render additional description if available */}
            {project.additionalDescription && (
                <div className="mt-8 mx-20">
                    <h3 className="text-2xl text-black mb-8 leading-relaxed text-center">{project.additionalDescription}</h3>
                </div>
            )}

            {/* Display project images in a modern layout */}
            {/* Display project images in a modern layout only if images are available */}
            {project.images && (
                <div className="flex flex-wrap justify-center gap-4 w-full md:w-10/12 mx-auto">
                    {project.images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 cursor-pointer"
                            onClick={() => handleImageClick(index)} // Click to enlarge image
                        >
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <img
                                    src={image}
                                    alt={`${project.title} ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}


            {/* Modal for enlarged image */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
                    onClick={handleCloseModal} // Close modal on click outside
                >
                    <div className="relative flex flex-col items-center">
                        <img
                            src={project.images[selectedImageIndex]}
                            alt="Enlarged View"
                            className="rounded-lg" // Keep the rounded corners for styling
                            style={{
                                width: 'auto',         // Maintain the original width
                                height: 'auto',        // Maintain the original height
                                maxWidth: '90vw',      // Ensure the image doesn't exceed 90% of the viewport width
                                maxHeight: '90vh',     // Ensure the image doesn't exceed 90% of the viewport height
                                objectFit: 'contain',  // Scale down the image to fit within the viewport while maintaining its aspect ratio
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                        />
                        {/* Previous and Next Buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent closing modal on button click
                                handlePrevImage();
                            }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-lg shadow-md hover:bg-lime-500"
                        >
                            Prev
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent closing modal on button click
                                handleNextImage();
                            }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-lg shadow-md hover:bg-lime-500"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}





            {project.additionalDescription1 && (
                <div className="mt-8 mx-20">
                    <h3 className="text-2xl text-black mb-8 leading-relaxed text-center">{project.additionalDescription1}</h3>
                </div>
            )}
            <Footer />
        </div>
    );
}
