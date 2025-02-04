export const ProductCard = ({ icon, title, description, onOpen }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden min-h-[320px] flex flex-col items-center p-4">
      <div className="mb-4">{icon}</div>
      <div className="w-full flex flex-col items-start">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p> 
      </div>
      <button
        onClick={onOpen}
        className="mt-auto w-full bg-[#054CA0] text-white py-2 px-4 rounded-md hover:bg-[#003d9e] transition-colors"
      >
        Explore
      </button>
    </div>
  );
};
