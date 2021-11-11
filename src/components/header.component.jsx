import React from "react";
import Image from "next/image";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-center items-center bg-white py-6 sm:grid-cols-2 sm:gap-20 ">
        <Image
          alt="fliqpay icon"
          src="/images/fliqpay-logo.png"
          width={33}
          height={33}
          className="object-contain "
        />
        <div className="sm:hidden">
        <Navigation />
        </div>
       
        <Image
          alt="close"
          src="/images/close.svg"
          width={35}
          height={35}
          className="object-contain"
        />
      </div>
      <hr />
      <div className="sm:block hidden sm:my-6 sm:px-5">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
