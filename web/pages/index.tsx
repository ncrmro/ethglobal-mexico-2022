import type { NextPage } from "next";
import React, { useState } from "react";
import {
  proposals as mockedProposals,
  ProposalState,
  proposalState,
} from "../routes/Proposal";
import Link from "next/link";

// TODO filter by the viewers doas
/**
 * Show all the user's threads
 * @constructor
 */
const Home: NextPage = () => {
  const [selectedState, setState] = useState<ProposalState | "All">("All");
  let proposals = mockedProposals;
  if (selectedState !== "All") {
    proposals = proposals.filter((p) => p.state === selectedState);
  }

  return (
    <>
      <div>
        <h1>Proposals</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="state">State:</label>
          <select
            name="state"
            id="state"
            // @ts-ignore
            onChange={(event) => setState(event.target.value)}
          >
            {proposalState.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
            <option value="All">All</option>
          </select>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ float: "left" }}>Proposal</div>
        <div style={{ display: "flex", gap: ".4rem" }}>
          <div>Replies</div>
          <div>Views</div>
          <div>Activity</div>
        </div>
      </div>
      {proposals.map((proposal) => (
        <div key={proposal.id}>
          <Link href={`/proposals/${proposal.id}`}>{proposal.title}</Link>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>State: {proposal.state}</div>
            <div style={{ display: "flex", gap: ".1em" }}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
