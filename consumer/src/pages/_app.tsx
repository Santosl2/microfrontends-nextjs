import { AppProps } from "next/app";

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return <Component {...pageProps} key={rest.router.asPath} />;
}

export default MyApp;
