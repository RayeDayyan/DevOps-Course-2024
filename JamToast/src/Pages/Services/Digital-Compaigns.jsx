import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mktgBg from "../../assets/mktg-bg.png";
import TypingText from "../../components/TypingText.jsx";
import GetInTouch from "../../components/Get-in-Touch.jsx";

const DigitalCompaigns = () => {
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
                    <TypingText text="Digital Compaigns" />
                    <p className="text-2xl text-[#ffffff] mb-2">From branding to deployment, we are your one-stop digital solution.</p>
                </div>
            </section>
            <br />
            <br />
            <div className="container mx-auto px-4 text-left mb-10">
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    At <span className="font-bold">JammToast</span>, we pride ourselves on blending industry best practices with our own innovative strategies to meet the unique needs of our clients. Our team works closely with you, ensuring a seamless handover and empowering your in-house team with the tools and knowledge to manage, maintain, and grow your digital assets independently.
                </p>

                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    In the digital age, your brand's presence online is crucial. We create powerful, data-driven campaigns that go beyond likes and followers. Our goal is to drive engagement, increase brand visibility, and generate results that matter. Whether it's through social media, search engine marketing, or digital ads, we build campaigns that deliver measurable success.                </p>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4">Why choose JammToast for Digital Compaigns?</h2>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2"><span className="font-bold">Social Media Campaigns:</span> We design creative, engaging campaigns that resonate with your audience and grow your community.</li>
                    <li className="mb-2"><span className="font-bold">Paid Media:</span> Our data-driven approach to paid advertising (Google Ads, Facebook, Instagram, and more) ensures you get the best ROI.</li>
                    <li className="mb-2"><span className="font-bold">Influencer Marketing:</span> We collaborate with the right influencers who align with your brand values to boost authenticity and reach.</li>
                </ul>
            </div>
            <GetInTouch/>
            <Footer />
        </div>
    );
};

export default DigitalCompaigns;
