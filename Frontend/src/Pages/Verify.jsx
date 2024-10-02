import { useContext, useEffect } from "react";
import { shopContext } from "../Context/ShopContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const backendURL = import.meta.env.VITE_BACKENT_URL;
  const { token, setCartItems } = useContext(shopContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const payment = async () => {
    console.log("token:", token);
    if (!token) return null;
    const paymentRediretToBackend = await axios.post(
      `${backendURL}/api/order/verify-payment`,
      { success, orderId },
      { headers: { token } }
    );
    if (paymentRediretToBackend.data.success) {
      setCartItems({});
      toast.success(paymentRediretToBackend.data.message);
      navigate("/orders");
    } else {
      toast.error(paymentRediretToBackend.data.message);
      navigate("/cart");
    }
    console.log(paymentRediretToBackend);
  };

  useEffect(() => {
    payment();
  }, [token]);

  return <div>"Please Wait a moment ..."</div>;
};

export default Verify;
