import React, { useState, useContext} from "react";
import Card from "./card.component";
import { LOCATION_TYPES } from "./payout-form.component";
import RecipientInput from "./recipient-input.component";
import CustomTab from "./tab.component";
import PayoutContext from "../../payout-context";
import { NavigationContext, PAGE_NAMES } from "../../navigation-context";


const SecondStep = () => {
  const { state, handleChange } = useContext(PayoutContext);
  const [page, setPage] = useContext(NavigationContext)

  const [formData] = state;
  const onChange = handleChange

  const { email, fullName, swift, accountNumber, locationType } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
   setPage(PAGE_NAMES.receiver)
  };

  return (
    <form onSubmit={onSubmit}>
      <Card title="Your Recipient" description="Who are you sending money to?">
        <hr className="my-3" />

        <RecipientInput
          label="Their email (optional)"
          name="email"
          value={email}
          onChange={onChange}
          type="email"
        />
        <RecipientInput
          label="Full name of the account holder"
          name="fullName"
          value={fullName}
          onChange={onChange}
          type="text"
        />

        <CustomTab
          options={Object.values(LOCATION_TYPES)}
          name="locationType"
          onChange={onChange}
          selectedValue={locationType}
        />

        {locationType === LOCATION_TYPES.insideEurope ? (
          <div className="cargo_input">
            <RecipientInput
              name="accountNumber"
              value={accountNumber}
              placeholder="DE98370440018929829032"
              label="IBAN"
              onChange={onChange}
              type="text"
            />
          </div>
        ) : (
          <div className="cargo_input">
            <RecipientInput
              name="swift"
              value={swift}
              placeholder="BUKBGB22"
              label="SWIFT / BIC code"
              onChange={onChange}
              type="text"
            />
            <RecipientInput
              name="accountNumber"
              value={accountNumber}
              placeholder="0123456789"
              label="IBAN / Account Number"
              onChange={onChange}
              type="text"
            />
          </div>
        )}

        <button
          className="w-full bg-primary-light text-white h-14 rounded-md my-6"
          type="submit"
          disabled={!email}
        >
          Continue
        </button>
      </Card>
    </form>
  );
};

export default SecondStep;
