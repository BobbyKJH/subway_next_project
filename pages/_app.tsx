// React
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
// Component
import Header from "../components/Header";
// Style
import { GlobalStyle } from "../styles/ResetStyle";
// Redux
import { Provider } from "react-redux";
import { store } from "../store/store";
// Component
import LogIn from "../components/login/LogIn";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [nick, setNick] = useState<string | null>(null);

  useEffect(() => {
    const userNick = localStorage.getItem("nick");
    setNick(userNick);
  });

  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        {nick ? (
          <>
            <Header />
            <Component {...pageProps} />
          </>
        ) : (
          <LogIn />
        )}
      </>
    </Provider>
  );
};

export default MyApp;
