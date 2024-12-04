export default function ServiceCard({ icon, title, description }) {
    return (
        <div className="bg-[#b6ff49] p-3 rounded-lg shadow-md transition-transform transform hover:bg-[#b6ff49b0] hover:shadow-xl relative overflow-hidden group w-[350px] h-[150px]">
            <div className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center text-[#000000] mb-3 transition-transform transform group-hover:scale-110">
                {icon}
            </div>
            <h3 className="text-10l font-sans font-bold mb-2 text-[#000000] transition-all duration-300 ">{title}</h3>
            <p className="text-[#242424] text-sm transition-all duration-300 group-hover:text-black-300">{description}</p>
            <div className="absolute inset-0 bg-[#ccff66] opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
        </div>
    );
}

