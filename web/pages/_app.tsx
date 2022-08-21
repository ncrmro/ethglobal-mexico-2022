import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import styles from "../styles/Home.module.css";
import { Web3Provider } from "../context/Web3Context";
import { NavBar } from "../components/Navbar";
import { useViewerObservable, ViewerContext } from "../context/Viewer";
import { ApolloProvider, useApollo } from "../utils/apollo";

const Layout: React.FC<{ children: ReactNode }> = (props) => (
  <div className={styles.container}>
    <NavBar />
    <div className={styles.main}>{props.children}</div>
  </div>
);

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(undefined);
  const viewer = useViewerObservable();
  return (
    <Web3Provider>
      <ApolloProvider client={apolloClient}>
        <ViewerContext.Provider value={viewer}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ViewerContext.Provider>
      </ApolloProvider>
    </Web3Provider>
  );
}

export default MyApp;
