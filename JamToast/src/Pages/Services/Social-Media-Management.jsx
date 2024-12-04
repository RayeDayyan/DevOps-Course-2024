import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mktgBg from "../../assets/mktg-bg.png";
import TypingText from "../../components/TypingText.jsx";
import GetInTouch from "../../components/Get-in-Touch.jsx";

const SocialMediaManagement = () => {
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
                    <TypingText text="Social Media Management" />
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
                    Managing your brand’s social presence can be overwhelming, but that’s where we come in. We offer end-to-end social media management services that ensure your brand stays relevant, engaging, and authentic across all platforms. From curating content to engaging with your community, we handle the day-to-day tasks so you can focus on your business.                </p>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4">Why choose JammToast for Social Media Management?</h2>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2"><span className="font-bold">Content Curation:</span> We create tailored content calendars that ensure consistency while keeping your audience hooked.</li>
                    <li className="mb-2"><span className="font-bold">Community Engagement:</span> We engage with your followers, respond to messages, and help build a loyal online community.</li>
                    <li className="mb-2"><span className="font-bold">Performance Tracking:</span> With regular performance reports, we track what’s working and tweak strategies for optimal results.</li>
                </ul>
            </div>
            <GetInTouch/>
            <Footer />
        </div>
    );
};

export default SocialMediaManagement;
