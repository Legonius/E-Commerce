import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";

const About = () => {
  return (
    <div className="flex flex-col gap-10 mt-6">
      <div className="flex flex-col justify-center items-center gap-10">
        <Title text1={"ABOUT"} text2={"US"} />
        <div className="flex flex-col gap-4 sm:items-start sm:gap-10 sm:flex-row sm:justify-center items-center md:items-center">
          <div className="w-full sm:w-2/3 h-full">
            <img
              className="w-full"
              src="https://ik.imagekit.io/sj5gqfifxi/about_img.png?updatedAt=1727249348592"
              alt="about-img"
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <p className="text-slate-500">
              Welcome to [Your Store Name], where quality meets convenience. We
              are a passionate team dedicated to bringing you the best products
              in [your niche or industry]. Our mission is to provide an
              exceptional shopping experience by offering a wide range of
              high-quality items, outstanding customer service, and fast,
              reliable shipping. <br />
              <br />
              At [Your Store Name], we believe in the power of choice. That’s
              why we carefully curate our selection to include only the best
              products that meet our rigorous standards. We are more than just a
              store; we are a community. <br />
              <br />
              We value our customers and strive to build long-lasting
              relationships with them. Your satisfaction is our top priority,
              and we are committed to providing you with an unparalleled
              shopping experience. Thank you for choosing [Your Store Name]. We
              look forward to serving you and making your shopping experience
              with us unforgettable.
            </p>
            <p className="font-bold">Our Mission</p>
            <p>
              At [Your Store Name], our mission is to empower our customers by
              providing them with a diverse range of high-quality products that
              enrich their lives. We are committed to creating an exceptional
              online shopping experience through innovation, integrity, and
              unparalleled customer service. Our goal is to make shopping
              convenient, accessible, and enjoyable for everyone, while
              fostering a community built on trust and satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="flex flex-col sm:grid sm:grid-cols-3 mt-8">
          <div className="flex flex-col justify-center gap-6 items-center border-2 p-20 sm:p-10 md:px-10 md:py-20">
            <p className="font-bold">Quality Assurance:</p>
            <p className="text-gray-400">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 items-center border-2 p-20 sm:p-10 md:px-10 md:py-20">
            <p className="font-bold">Convenience:</p>
            <p className="text-gray-400">
              With our user-friendly interface and hassle-free ordering process
              shopping has never been easier.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 items-center border-2 p-20 sm:p-10 md:px-10 md:py-20">
            <p className="font-bold">Exceptional Customer Service:</p>
            <p className="text-gray-400">
              Our team of dedicated professionals is here to assist you the way.
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
