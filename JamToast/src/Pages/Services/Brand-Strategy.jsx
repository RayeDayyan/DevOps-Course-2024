import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mktgBg from "../../assets/mktg-bg.png";
import TypingText from "../../components/TypingText.jsx";
import GetInTouch from "../../components/Get-in-Touch.jsx";

const BrandStrategy = () => {
    return (
        <div className="bg-[#ffffff] min-h-screen text-[#4A3E37] flex flex-col ">
            <Navbar />
            <section
                className="py-10 bg-cover bg-fixed w-full text-center justify-center items-center"
                style={{
                    backgroundImage: `url(${mktgBg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >

                <div className="container mx-auto px-4 text-center">
                    <TypingText text="Brand Strategy" />
                    <p className="text-2xl text-[#ffffff] mb-8">From branding to deployment, we are your one-stop digital solution.</p>
                </div>
            </section>
            <br />
            <br />
            <div className="container mx-auto px-4 text-left mb-10">
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    At <span className="font-bold">JammToast</span>, we pride ourselves on blending industry best practices with our own innovative strategies to meet the unique needs of our clients. Our team works closely with you, ensuring a seamless handover and empowering your in-house team with the tools and knowledge to manage, maintain, and grow your digital assets independently.
                </p>

                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                A strong brand is more than just a logo and tagline; it's a promise made to your customers. Our strategic approach starts with a deep dive into your business, your audience, and your competition. We develop a comprehensive plan that positions your brand as a market leader and creates meaningful connections with your target audience.                
                </p>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4">Why choose JammToast for Brand Strategy?</h2>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2"><span className="font-bold">Market Research & Insights:</span> We study market trends, consumer behaviour, and competitive landscapes to uncover key insights.</li>
                    <li className="mb-2"><span className="font-bold">Brand Identity Development:</span> From defining your brand's mission and values to creating logos and visuals, we ensure every touchpoint reflects who you are.</li>
                    <li className="mb-2"><span className="font-bold">Messaging & Positioning:</span> We help you define your voice, craft your message, and position your brand in a way that sets you apart.</li>
                </ul>
            </div>
            <GetInTouch/>
            <Footer/>
        </div>
    );
};

export default BrandStrategy;
