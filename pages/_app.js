/* pages/_app.js */
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themes";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>NFT MarketPlace</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
