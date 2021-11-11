import React from "react";

const Card = ({ children, title, description }) => {
  return (
    <div className="bg-white w-lg mt-20 mx-auto px-7 py-9 border border-border rounded-lg sm:border-0 sm:mt-4 sm:px-2 sm:w-mobile">
      <div>
        <h3 className="font-medium text-xl text-primary">{title}</h3>
        <h6 className="text-primary-dark">{description}</h6>

        {children}
      </div>
    </div>
  );
};

export default Card;
