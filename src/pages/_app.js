import "../styles/globals.css";
import { PayoutContextProvider } from "../../payout-context";
import { NavigationContextProvider } from "../../navigation-context";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationContextProvider>
      <PayoutContextProvider>
        <Component {...pageProps} />
      </PayoutContextProvider>
    </NavigationContextProvider>
  );
}

export default MyApp;
