import React, { useContext } from "react";
import { useState, useEffect } from "react";
import FirstStep from "../components/first-step.component";
import Header from "../components/header.component";
import SecondStep from "../components/second-step.component";
import ThirdStep from "../components/third-step.component";
import axios from "axios";
import PayoutContext from "../../payout-context";
import { NavigationContext, PAGE_NAMES } from "../../navigation-context";

export const PAYOUT_FEE = 0.01;

export const LOCATION_TYPES = {
  insideEurope: "inside-europe",
  outsideEurope: "outside-europe",
};

const PayoutForm = () => {
  ////////////// FIRST STEP STATES

  const [page, setPage] = useContext(NavigationContext);

  return (
    <div className="bg-body h-full pb-14 sm:bg-white ">
      <Header />
      {page === PAGE_NAMES.amount && <FirstStep />}
      {page === PAGE_NAMES.recipient && <SecondStep />}
      {page === PAGE_NAMES.receiver && <ThirdStep />}
    </div>
  );
};

export default PayoutForm;
