import React, { useContext } from "react";
import Card from "./card.component";
import { PAYOUT_FEE } from "./payout-form.component";
import swal from "sweetalert";
import PayoutContext from "../../payout-context";

const ThirdStep = ({ onClick }) => {
  const { state, rates } = useContext(PayoutContext);
  const [formData] = state;
  const {
    sendAmount,
    recipientCurrency,
    recipientAmount,
    email,
    fullName,
    accountNumber,
  } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    swal("Success!", "Your transaction is being processed!", "success").then(
      () => {
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    );
  };
  return (
    <div>
      <Card title="Review details of your transfer">
        <form onSubmit={onSubmit}>
          <hr className="mt-4" />
          <div className="flex justify-between my-4">
            <h5 className="text-secondary-light text-sm">You send</h5>
            <h4 className="text-secondary-darker font-semibold text-xl">
              {Number(PAYOUT_FEE * sendAmount).toFixed(2)} USD
            </h4>
          </div>
          <div className="flex justify-between my-4">
            <h5 className="text-secondary-light text-sm">
              Total fees (Included)
            </h5>
            <h4 className="text-secondary-darker font-medium text-base">
              {Math.round(sendAmount - PAYOUT_FEE * sendAmount) / 100} USD
            </h4>
          </div>
          <div className="flex justify-between my-4">
            <h5 className="text-secondary-light text-sm">
              Amount we&apos;ll convert
            </h5>
            <h4 className="text-secondary-darker font-medium text-base">
              {rates[recipientCurrency]} USD
            </h4>
          </div>

          <div className="flex justify-between my-4">
            <h5 className="text-secondary-light text-sm">Recipient gets</h5>
            <h4 className="text-secondary-darker font-semibold text-xl">
              {recipientAmount} EUR
            </h4>
          </div>
          <hr className="mt-5" />
          <div className="flex justify-between my-4">
            <h5 className="text-secondary-light text-sm">Name</h5>
            <h4 className="text-secondary-darker font-medium text-base">
              {fullName}
            </h4>
          </div>
          <div className="flex justify-between my-4">
            <h5 className="text-secondary-light text-sm">Email address</h5>
            <h4 className="text-secondary-darker font-medium text-base">
              {email}
            </h4>
          </div>
          <div className="flex justify-between my-4">
            <h5 className="text-secondary-light text-sm">
              IBAN / Account number
            </h5>
            <h4 className="text-secondary-darker font-medium text-base">
              {accountNumber}
            </h4>
          </div>
          <button className="my-5 bg-success text-white rounded-md w-full h-14">
            Continue
          </button>
        </form>
      </Card>
    </div>
  );
};

export default ThirdStep;
