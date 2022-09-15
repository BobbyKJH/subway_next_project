// React
import { useEffect, useState } from "react";
// Component
import LogIn from "../components/login/LogIn";
import Layout from "./Layout";
// Style
import { GlobalStyle } from "../styles/ResetStyle";
// Redux
import { Provider } from "react-redux";
import { store } from "../store/store";
// Type
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [nick, setNick] = useState<string | null>(null);

  useEffect(() => {
    const userNick = localStorage.getItem("nick");
    setNick(userNick);
  }, []);

  return (
    <>
      <Head>
        <title>나만의 서브웨이</title>
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        {nick ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <LogIn />
        )}
      </Provider>
    </>
  );
};

export default MyApp;
