import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});
function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );

  // return (
  //   <ApolloProvider client={client}>
  //     <Component {...pageProps} />;
  //   </ApolloProvider>
  // );
}

export default MyApp;
