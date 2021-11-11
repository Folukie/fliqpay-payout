import "../styles/globals.css";
import {PayoutContextProvider} from "../../payout-context";

function MyApp({ Component, pageProps }) {
  return (
    <PayoutContextProvider>
      <Component {...pageProps} />
    </PayoutContextProvider>
  );
}

export default MyApp;
