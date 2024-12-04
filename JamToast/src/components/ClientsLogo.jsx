import React from 'react';
import AlFatah from "../assets/clientsLogos/AlFatah.png";
import AlFutaim from "../assets/clientsLogos/AlFutaimMotors.jpg";
import Baked from "../assets/clientsLogos/Baked.jpg";
import BullsFC from "../assets/clientsLogos/BullsFC.jpg";
import Boulevard8 from "../assets/clientsLogos/Boulevard8.jpg";
import HiraAlibeauty from "../assets/clientsLogos/HiraAlibeauty.png";
import johnny_and_jugnu_logo from "../assets/clientsLogos/johnny_and_jugnu_logo.jpg";
import medoget from "../assets/clientsLogos/medoget.png";
import bountti from "../assets/clientsLogos/bountti.png";
import PlantMom from "../assets/clientsLogos/PlantMom.jpg";
import Purl from "../assets/clientsLogos/PURL.jpg";
import Spread from "../assets/clientsLogos/Spread.png";
import ambZhen from "../assets/clientsLogos/ambassadorZhen.png";
import ChOne from "../assets/clientsLogos/ChapterOne.jpg";
import dot from "../assets/clientsLogos/dot.png";
import halalCart from "../assets/clientsLogos/HalalCart.png";
import noodleMagic from "../assets/clientsLogos/NoodleMaGIC.png";
import ouii from "../assets/clientsLogos/ouii.jpg";
import hungryToad from "../assets/clientsLogos/TheHungryToad.jpg";

const logos = [
    AlFatah,
    AlFutaim,
    Baked,
    BullsFC,
    Boulevard8,
    HiraAlibeauty,
    johnny_and_jugnu_logo,
    medoget,
    bountti,
    PlantMom,
    Purl,
    Spread,
    ambZhen,
    ChOne,
    dot,
    halalCart,
    noodleMagic,
    ouii,
    hungryToad
];

export default function ClientsLogo() {
    return (
        <div className="bg-[#ffffff] py-10 overflow-hidden">
            <style>
                {`
                    @keyframes slide {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-${logos.length * 140}px); } /* Adjust based on total width of logos */
                    }
                    .slider {
                        display: flex;
                        animation: slide ${logos.length * 2}s linear infinite; /* Total time for one complete slide */
                        white-space: nowrap;
                    }
                    .logo {
                        margin-right: 40px; /* Adjust spacing as needed */
                        height: 100px; /* Logo height */
                    }
                `}
            </style>
            <div className="container mx-auto">
                <div className="slider">
                    {/* Render logos twice to create a seamless effect */}
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Client Logo ${index + 1}`} className="logo inline-block" />
                    ))}
                    {logos.map((logo, index) => (
                        <img key={`clone-${index}`} src={logo} alt={`Client Logo ${index + 1}`} className="logo inline-block" />
                    ))}
                </div>
            </div>
        </div>
    );
}
