import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mktgBg from "../../assets/mktg-bg.png";
import TypingText from "../../components/TypingText.jsx";
import GetInTouch from "../../components/Get-in-Touch.jsx";

const StoryTelling = () => {
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
                    <TypingText text="Creative Campaigns & Visual Storytellig" />
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
                    Our creative team excels in developing innovative campaigns that not only look amazing but also tell a deeper story. From concept ideation to full execution, we create campaigns that elevate your brand and create memorable experiences for your audience. Whether it’s launching a product or creating an immersive event, we’ve got the creative chops to make it happen.                </p>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4">Why choose JammToast for Creative Campaigns & Visual Storytellig?</h2>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2"><span className="font-bold">Campaign Conceptualization:</span> We develop bold, original ideas that capture the spirit of your brand and engage your audience.</li>
                    <li className="mb-2"><span className="font-bold">Storytelling through Design:</span> We create cohesive visual narratives across all touchpoints, from ads and videos to websites and print.</li>
                    <li className="mb-2"><span className="font-bold">Integrated Campaigns:</span> Combining online and offline elements, we ensure your campaign has maximum reach and impact.</li>
                </ul>
            </div>
            <GetInTouch/>
            <Footer />
        </div>
    );
};

export default StoryTelling;
