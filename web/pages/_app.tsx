import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import styles from "../styles/Home.module.css";
import { Web3Provider } from "../context/Web3Context";
import { NavBar } from "../components/Navbar";

const Layout: React.FC<{ children: ReactNode }> = (props) => (
  <div className={styles.container}>
    <NavBar></NavBar>
    {props.children}
  </div>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  );
}

export default MyApp;
