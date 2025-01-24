export const ProductCard = ({ icon, title, description, onOpen }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col items-center text-center">
            {icon}
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <div className="px-6 pb-4">
          <button 
            onClick={onOpen}
            className="w-full bg-[#0047bb] text-white py-2 px-4 rounded-md hover:bg-[#003d9e] transition-colors"
          >
            Open
          </button>
        </div>
      </div>
    );
  };