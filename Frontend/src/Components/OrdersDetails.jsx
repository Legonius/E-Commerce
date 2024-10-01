const OrdersDetails = ({ item, gO, currency, orders }) => {
  return (
    <div
      key={item._id}
      className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between my-4 border-y py-2 items-center text-gray-500"
    >
      <div className="flex flex-shrink-0 flex-1 gap-2">
        <div>
          <img className="w-20" src={item.image[0].url} />
        </div>
        <div className="flex flex-col justify-between">
          <p>{item.name}</p>
          <p>
            {currency} {item.price} {`Quantity: ${item.quantity}  -`}{" "}
            {item.size}
          </p>
          <p>{new Date(Number(orders.date)).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex w-full flex-1 justify-around sm:justify-between items-center ">
        <div className="flex  gap-2 items-center justify-center">
          <p
            className={`h-4 w-4 border-2 rounded-full  shrink-0 bg-green-500`}
          ></p>
          <p>{orders.status}</p>
        </div>
        <div className="flex items-center justify-end ">
          <button
            onClick={() => gO()}
            className="py-2 px-4 border-2 rounded-lg hover:text-green-400 hover:border-green-400"
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetails;
