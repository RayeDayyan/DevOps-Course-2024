export default function ProjectCard({ title, category, image }) {
    return (
        <div className="relative bg-[#ccff66] p-0 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p>{category}</p>
            </div>
        </div>
    );
}
