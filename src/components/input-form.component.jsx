import React, { useState, useEffect } from "react";
import axios from "axios";

const AmountInput = ({ placeholder, input, select, onChange, options, readOnly }) => {
  return (
    <div className="mt-6 mb-3 flex w-full mx-auto relative">
      <input
        type="text"
        className=" border border-input_border rounded-tl-md rounded-bl-md h-16 px-4 w-9/12 pt-4 text-primary text-xl"
        name={input?.name}
        value={input?.value}
        onChange={onChange}
        autoComplete="off"
        required
        readOnly={readOnly}
      />
      <h5 className="absolute top-2 left-4 text-xs text-secondary-light z-100">
        {placeholder}
      </h5>

      <select
        name={select?.name}
        value={select?.value}
        onChange={onChange}
        className="appearance-none bg-select_bg rounded-tr-md rounded-br-md h-16 w-3/12 px-5 text-center"
      >
        {options?.map((option, idx) => (
          <option value={option} key={idx} selected>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AmountInput;
