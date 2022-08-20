import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React, { ReactNode } from "react";
import { proposal, Proposal, proposals } from "../routes/Proposal";
import Link from "next/link";

/**
 * Show all the user's threads
 * @constructor
 */
const Home: NextPage = () => {
  return (
    <>
      {proposals.map((proposal) => (
        <div key={proposal.id}>
          <Link href={`/proposals/${proposal.id}`}>{proposal.title}</Link>
        </div>
      ))}
    </>
  );
};

export default Home;
