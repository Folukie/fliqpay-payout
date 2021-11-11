import React from "react";

const RecipientInput = ({ name, value, label, placeholder, onChange, type }) => {
  return (
    <div className="flex flex-col my-4">
      <label className="text-secondary-light text-sm">{label}</label>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}

        className="border border-input_border rounded-md h-12 my-1 px-3"
      />
    </div>
  );
};

export default RecipientInput;
