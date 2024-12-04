import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import appDevBg from "../../assets/app-dev-bg.png";
import TypingText from "../../components/TypingText.jsx";
import GetInTouch from "../../components/Get-in-Touch.jsx";

const AppDevelopment = () => {
    return (
        <div className="bg-[#ffffff] min-h-screen text-[#4A3E37] flex flex-col ">
            <Navbar />
            <section
                className="py-10 bg-cover bg-fixed w-full text-center justify-center items-center"
                style={{
                    backgroundImage: `url(${appDevBg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >

                <div className="container mx-auto px-4 text-center">
                    <TypingText text="Mobile App Development" />
                    <p className="text-2xl text-[#ffffff] mb-8">From branding to deployment, we are your one-stop digital solution.</p>
                </div>
            </section>
            <br />
            <br />
            <div className="container mx-auto px-4 text-left">
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    At <span className="font-bold">JammToast</span>, we create robust, user-friendly, and scalable mobile applications tailored to meet your business needs. Whether you are looking to launch a customer-facing app or an internal enterprise solution, we have the expertise to deliver high-performance mobile applications across various platforms.
                </p>
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    Our developers are experts in their respective platforms and continuously update their certifications to stay at the forefront of industry standards. We’re proud to have specialists across various domains, providing expertise that ensures high-quality solutions tailored to your business needs.
                </p>
                {/* -------------------------------------------   WHY CHOOSE JAMMTOAST FOR APP DEV    ------------------------------------------ */}
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4">Why choose JammToast for Mobile App Development?</h2>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2"><span className="font-bold">Cross-Platform Expertise:</span> We specialize in developing applications that run seamlessly on both iOS and Android, ensuring maximum reach for your product.</li>
                    <li className="mb-2"><span className="font-bold">Custom App Solutions:</span> Every business is unique, and so are your app requirements. We craft personalized solutions that are built to match your brand and functional needs.</li>
                    <li className="mb-2"><span className="font-bold">User-Centric Design:</span> Our apps are not only functional but also intuitive, providing a smooth and engaging user experience that drives user retention.</li>
                    <li className="mb-2"><span className="font-bold">Performance Optimized:</span> We focus on creating lightweight, fast-loading apps that run smoothly even with limited network connectivity.</li>
                    <li className="mb-2"><span className="font-bold">Ongoing Support:</span> We provide post-launch support and updates to ensure your app continues to perform optimally as your business evolves.</li>
                </ul>

                {/* -------------------------------------------------------   EXPERTISE    ----------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4 mt-8">Our Expertise:</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    At JammToast, we work with the latest mobile development frameworks and languages to ensure that your app is built with the most reliable, scalable, and efficient technology stack available today.                </p>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2"><span className="font-bold">Flutter:</span> Our team excels in Flutter, Google UI toolkit, which allows us to create high-quality native apps for both iOS and Android from a single codebase.</li>
                    <li className="mb-2"><span className="font-bold">Kotlin:</span> For Android-specific apps, we leverage Kotlin, offering a concise and safe language that’s tailor-made for modern app development.</li>
                    <li className="mb-2"><span className="font-bold">React Native:</span> If you prefer to keep your app ecosystem unified, our developers can build cross-platform applications using React Native, offering near-native performance and feel.</li>
                    <li className="mb-2"><span className="font-bold">Java:</span> For legacy systems or where stability is key, we develop reliable and robust applications using Java, one of the most trusted programming languages for Android development.</li>
                </ul>

                {/* -------------------------------------------------------    PROCESS     ----------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4 mt-8">Our Mobile Development Process:</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    We follow a meticulous development process to ensure that your mobile app is designed, developed, and deployed without any hiccups:     </p>
                <ul className="list-decimal list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2"><span className="font-bold">Discovery & Consultation:</span> We work closely with you to understand your vision, goals, and requirements.</li>
                    <li className="mb-2"><span className="font-bold">UI/UX Design:</span> Our design team will create wireframes and mockups, ensuring your app’s interface is both beautiful and functional.</li>
                    <li className="mb-2"><span className="font-bold">Development:</span> Our skilled developers use the best-suited technologies for your project, ensuring top performance and scalability.</li>
                    <li className="mb-2"><span className="font-bold">Testing & QA:</span> We rigorously test your app across various devices and operating systems to ensure it’s free of bugs and performs flawlessly.</li>
                    <li className="mb-2"><span className="font-bold">Deployment:</span> We help you launch the app to the Apple App Store, Google Play, or other distribution platforms.</li>
                    <li className="mb-2"><span className="font-bold">Maintenance & Updates:</span> Our support doesn’t end at launch. We provide ongoing maintenance and updates to keep your app relevant and performing well.</li>
                </ul>


                <br />
                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4 mt-8">Transform Your Vision into Reality</h2>
                <p className="text-lg text-gray-700 mb-20 max-w-4xl mx-auto">
                    Let JammToast turn your mobile app concept into a reality. Our expertise in mobile app development, combined with our commitment to quality, ensures that your app will not only meet but exceed expectations.                </p>
            </div>
            <GetInTouch/>
            <Footer/>
        </div>
    );
};

export default AppDevelopment;
