import type { AppProps } from "next/app";
// Style
import { GlobalStyle } from "../styles/ResetStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
