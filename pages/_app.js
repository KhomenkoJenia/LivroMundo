import "@/styles/globals.css";
import "@/pages/fonts/fonts.css";
import Layout from "./layout";
import { CartContextProvider } from "../store/CartContext.jsx";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
