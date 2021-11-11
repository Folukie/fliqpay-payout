import React, { createContext, useState, useEffect } from "react";
import { LOCATION_TYPES, PAYOUT_FEE } from "./src/components/payout-form.component";
import axios from "axios";
import swal from "sweetalert";


export const PayoutContext = createContext();

export const PayoutContextProvider = ({ children }) => {
  const state = useState({
    sendCurrency: "",
    sendAmount: "",
    recipientCurrency: "",
    recipientAmount: "",
    transferFee: "",
    conversionAmount: "",
    locationType: "",
    email: "",
    fullName: "",
    swift: "",
    accountNumber: "",
    locationType: LOCATION_TYPES.insideEurope,
  });

  const [formData, setFormData] = state;
  const {sendAmount, recipientCurrency} = formData

  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/conversion");

      const rates = response.data.rates;
      const currencies = Object.keys(rates);
      setRates(rates);
      setCurrencies(currencies);
      setFormData({ ...formData, recipientCurrency: currencies[0] });
    })();
  }, []);

  useEffect(() => {
    const rate = rates[recipientCurrency];

    const conversion =
      Math.round((sendAmount - PAYOUT_FEE * sendAmount) * rate) / 100;

    setFormData((formData) => ({
      ...formData,
      recipientAmount: conversion,
    }));
  }, [setFormData, sendAmount, rates, recipientCurrency]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PayoutContext.Provider value={{ state, rates, currencies, handleChange }}>
      {children}
    </PayoutContext.Provider>
  );
};

export default PayoutContext;
