export const ItemCard = ({
  title,
  category,
  image,
  price,
}: {
  title: string;
  category: string;
  image: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-600">{category}</p>
      <img src={image} alt="sample" className="h-24 w-44 rounded-lg" />
      <div className="flex justify-between items-center">
        <p className="text-gray-500 font-semibold flex flex-col">
          Price: <span className="text-black">${price}</span>
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
