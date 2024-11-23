const ShimmerCard = () => {
  return (
    <div className="shimmer h-72 w-full p-2">
      <div className="h-4/6 w-full bg-gray-200"></div>
      <div className="h-2/6 flex flex-col gap-2 mt-2">
        <div className="flex-1 bg-gray-200 rounded"></div>
        <div className="flex-1 bg-gray-200 w-1/2 rounded"></div>
        <div className="flex-1 bg-gray-200 w-1/3 rounded"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
