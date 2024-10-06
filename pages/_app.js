import "@/styles/globals.css";
import "@/pages/fonts/fonts.css";
import Layout from "./layout";
import { CartContextProvider } from "../store/CartContext.jsx";
import { UserProgressContextProvider } from "../store/UserProgressContext.jsx";

export default function App({ Component, pageProps }) {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
