import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mktgBg from "../../assets/mktg-bg.png";
import TypingText from "../../components/TypingText.jsx";
import GetInTouch from "../../components/Get-in-Touch.jsx";

const ContentCreation = () => {
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
                    <TypingText text="Content Creation" />
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
                    Our content creation service is all about turning ideas into engaging narratives that captivate your audience. Whether you need high-quality videos, photos, or compelling written content, we craft visuals and stories that align with your brand's voice and vision.
                </p>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4">Why choose JammToast for Content Creation?</h2>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2"><span className="font-bold">Video Production:</span> From concept development to filming and editing, we create visually stunning and emotionally powerful videos that capture attention across all platforms.</li>
                    <li className="mb-2"><span className="font-bold">Photography:</span> Whether it's lifestyle shoots, product shoots, or event coverage, our photography captures the essence of your brand in every shot.</li>
                    <li className="mb-2"><span className="font-bold">Graphic Design & Illustration:</span>  Our creative team brings your ideas to life through custom graphics, animations, and illustrations designed to stand out.</li>
                </ul>
            </div>
            <GetInTouch/>
            <Footer />
        </div>
    );
};

export default ContentCreation;
