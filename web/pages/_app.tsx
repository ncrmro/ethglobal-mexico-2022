import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import styles from "../styles/Home.module.css";

const Layout: React.FC<{ children: ReactNode }> = (props) => (
  <div className={styles.container}>{props.children}</div>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
