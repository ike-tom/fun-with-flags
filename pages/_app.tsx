import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { Nunito_Sans } from "@next/font/google";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const inter = Nunito_Sans({ weight: ["400", "700"], subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
