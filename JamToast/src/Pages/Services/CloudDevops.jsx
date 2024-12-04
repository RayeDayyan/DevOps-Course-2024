import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import webDevBg from "../../assets/web-dev-bg.png";
import TypingText from "../../components/TypingText.jsx";
import GetInTouch from "../../components/Get-in-Touch.jsx";


export default function CloudDevops() {
    return (
        <div className="bg-[#ffffff] min-h-screen text-[#4A3E37] flex flex-col ">
            <Navbar/>
            <section
                className="py-10 bg-cover bg-fixed w-full text-center justify-center items-center"
                style={{
                    backgroundImage: `url(${webDevBg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >

                <div className="container mx-auto px-4 text-center">
                    <TypingText text="Cloud and Devops"/>
                    <p className="text-2xl text-[#ffffff] mb-8">From branding to deployment, we are your one-stop
                        digital solution.</p>
                </div>
            </section>
            <br/>
            <br/>
            <div className="container mx-auto px-4 text-left">
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    At <span className="font-bold">JammToast</span>, our Cloud and DevOps services are designed to drive efficiency,
                    scalability, and reliability in your digital infrastructure.
                    We leverage cutting-edge cloud platforms like AWS, Azure, and Google Cloud to build flexible,
                    cost-effective environments that grow with your business.

                </p>

                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    Our team of DevOps experts ensures continuous integration and continuous
                    delivery (CI/CD) pipelines are seamlessly integrated, allowing for faster deployment,
                    reduced downtime, and more resilient systems.
                </p>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-left mx-auto mb-6 max-w-4xl text-gray-700">
                    <li className="mb-2">Cloud-native solutions tailored to your business</li>
                    <li className="mb-2">Robust infrastructure as code (IaC) implementations using Terraform</li>
                    <li className="mb-2">SEO optimized for better visibility</li>
                    <li className="mb-2">Automated scaling and monitoring to ensure uptime and performance</li>
                    <li className="mb-2">Secure and compliant systems with the latest cloud security best practices</li>
                    <li className="mb-2">Continuous integration and automated deployments for faster releases</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#000000] text-center mb-4 mt-8">How we do Cloud and Devops?</h2>
                <h2 className="text-2xl font-semibold text-[#000000] max-w-4xl mx-auto mb-4 mt-3">Cloud Infrastructure & Management:</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    We design and manage scalable cloud infrastructures,
                    implementing automation to optimize resource usage and reduce operational costs.
                    Whether you’re migrating to the cloud or enhancing your current setup,
                    our team ensures a seamless transition, setting up high availability, disaster recovery plans,
                    and automated backups.
                </p>
                <h2 className="text-2xl font-semibold text-[#000000] max-w-4xl mx-auto mb-4 mt-3">Devops and Automation:</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
                    Our DevOps strategies ensure that your development and operations teams work in sync.
                    We establish CI/CD pipelines using tools like Jenkins and GitHub Actions to streamline the development cycle.
                    Our expertise in containerization with Docker and orchestration with Kubernetes
                    ensures that your applications are deployable in any environment with ease and reliability.
                </p>

                <p className="text-lg text-gray-700 mb-20 max-w-4xl mx-auto">
                    Let JammToast empower your organization with agile,
                    scalable, and secure cloud and DevOps solutions that drive innovation and business growth.
                </p>
            </div>
            <GetInTouch/>
            <Footer/>
        </div>
    )
}


