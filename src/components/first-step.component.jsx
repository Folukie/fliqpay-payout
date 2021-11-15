import React, { useContext } from "react";
import { PAYOUT_FEE } from "./payout-form.component";
import Card from "./card.component";
import AmountInput from "./input-form.component";
import ReactTooltip from "react-tooltip";
import PayoutContext from "../../payout-context";
import { NavigationContext, PAGE_NAMES } from "../../navigation-context";

const FirstStep = () => {
  const { state, rates, currencies, handleChange } = useContext(PayoutContext);
  const [page, setPage] = useContext(NavigationContext)
  const [formData] = state;
  const onChange = handleChange
  const { sendAmount, sendCurrency, recipientAmount, recipientCurrency } =
    formData;
  const onSubmit = (e) => {
    e.preventDefault();
    setPage(PAGE_NAMES.recipient)
    
  };

  return (
    <Card title="One-time Payout" description="Send money internationally">
      <form onSubmit={onSubmit}>
        <AmountInput
          placeholder="You send"
          options={["EUR"]}
          input={{ name: "sendAmount", value: sendAmount }}
          select={{ name: "sendCurrency", value: sendCurrency }}
          onChange={onChange}
        />
        {recipientAmount ? (
          <table className="relative">
            <div
              className="absolute h-36 -top-3 left-2 bg-secondary w-1 rounded-2xl"
              style={{ backgroundColor: " rgba(237, 237, 237, 1) " }}
            ></div>
            <tbody>
              <tr className="text-secondary-light text-base grid grid-cols-2 items-center">
                <td className="flex items-center gap-4 my-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-30"
                  >
                    <circle cx="10" cy="10" r="10" fill="#EDEDED" />
                    <path
                      d="M12.3947 10.464V9.168H7.38675V10.464H12.3947Z"
                      fill="#8B8F96"
                    />
                  </svg>
                  <span className="font-normal">
                    {Number(PAYOUT_FEE * sendAmount).toFixed(2)} USD
                  </span>
                </td>
                <td>Transfer Fee</td>
              </tr>
              <tr className="text-secondary-light text-base grid grid-cols-2  items-center">
                <td className="flex items-center gap-4 my-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-30"
                  >
                    <circle cx="10" cy="10" r="10" fill="#EDEDED" />
                    <path
                      d="M12.3096 9.19411V8.29211H7.02963V9.19411H12.3096ZM12.3096 11.8231V10.9321H7.02963V11.8231H12.3096Z"
                      fill="#8B8F96"
                    />
                  </svg>
                  <span>
                    {Math.round(sendAmount - PAYOUT_FEE * sendAmount) / 100} USD
                  </span>
                </td>
                <td>Amount we&apos;ll convert</td>
              </tr>
              <tr className="text-primary text-base grid grid-cols-2 items-center">
                <td className="flex items-center gap-4 my-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-30"
                  >
                    <circle cx="10" cy="10" r="10" fill="#EDEDED" />
                    <path
                      d="M10.1866 10.129L12.0456 7.39H10.9126L9.50463 9.491L8.06363 7.39H6.94163L8.77863 10.107L6.85363 13H7.96463L9.50463 10.778L11.0226 13H12.1556L10.1866 10.129Z"
                      fill="#8B8F96"
                    />
                  </svg>
                  <span className="font-normal">
                    {rates[recipientCurrency]}{" "}
                  </span>
                </td>
                <td>Guranteed rate (1hr)</td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}

        <AmountInput
          placeholder="Recipient gets"
          options={currencies}
          input={{ name: "recipientAmount", value: recipientAmount }}
          select={{ name: "recipientCurrency", value: recipientCurrency }}
          onChange={onChange}
          readOnly= "true"
      
        />
        <div className="grid grid-cols-2 gap-5 mt-10 mb-4 sm:grid-cols-1">
          <ReactTooltip />
          <button
            type="button"
            className="border-2 border-primary-light text-primary-light font-medium rounded-md h-14 cursor-not-allowed"
            data-tip="Unavailable"
            
          >
            Compare Rates
          </button>
          <button
            className={`${
              recipientAmount ? "bg-primary-light" : "bg-button_disabled"
            } text-white rounded-md h-14 font-medium`}
            type="submit"
            disabled={!recipientAmount}
          >
            Continue
          </button>
        </div>
      </form>
    </Card>
  );
};

export default FirstStep;
