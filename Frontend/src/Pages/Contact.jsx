import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";

const Contact = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-14 sm:gap-20">
      <Title text1={"CONTACT"} text2={"US"} />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <img
          className="w-full sm:w-1/2"
          src="https://ik.imagekit.io/sj5gqfifxi/contact_img.png"
        />
        <div className="w-full sm:w-auto flex flex-col gap-6">
          <h6 className="font-bold text-slate-700"> Our Store</h6>
          <div className="text-gray-400">
            <p>54709 Willms Station</p>
            <p>Suite 350,Washington, USA</p>
          </div>
          <div className="text-gray-400">
            <p>54709 Willms Station</p>
            <p>Suite 350,Washington, USA</p>
          </div>
          <h6 className="font-bold text-slate-700"> Careers at Forever</h6>
          <div className="text-gray-400">
            <p>Learn more about our teams and job openings.</p>
          </div>
          <button className="border-2 py-4 px-6 w-44 hover:bg-black hover:text-white transition-all ">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
