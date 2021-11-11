import React, { useContext } from "react";
import { useState, useEffect } from "react";
import FirstStep from "../components/first-step.component";
import Header from "../components/header.component";
import SecondStep from "../components/second-step.component";
import ThirdStep from "../components/third-step.component";
import axios from "axios";
import PayoutContext from "../../payout-context";

export const PAYOUT_FEE = 0.01;

export const LOCATION_TYPES = {
  insideEurope: "inside-europe",
  outsideEurope: "outside-europe",
};
const PayoutForm = () => {
  ////////////// FIRST STEP STATES

  const [page, setpage] = useState(1);

  function nextPage() {
    if (page === 3) return;
    setpage((page) => page + 1);
  }
  const { state, rates, currencies, handleChange } = useContext(PayoutContext);
  const [formData, setFormData] = state;

  const { sendAmount, recipientCurrency } = formData;
  console.log(sendAmount);



  return (
    <div className="bg-body h-full pb-14 sm:bg-white ">
      <Header />
      {page === 1 && (
        <FirstStep
          currencies={currencies}
          rates={rates}
          formData={formData}
          onChange={handleChange}
          goNext={nextPage}
        />
      )}
      {page === 2 && (
        <SecondStep
          goNext={nextPage}
          formData={formData}
          onChange={handleChange}
        />
      )}
      {page === 3 && <ThirdStep formData={formData} rates={rates} />}
    </div>
  );
};

export default PayoutForm;
