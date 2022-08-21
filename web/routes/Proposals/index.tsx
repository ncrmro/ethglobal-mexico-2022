import type { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import { proposalState, ProposalState } from "../../utils/mocks";
import useFetchProposals from "./useFetchProposals";

// TODO filter by the viewers doas
/**
 * Show all the user's threads
 * @constructor
 */
export const ProposalsRoute: NextPage = () => {
  const [selectedState, setState] = useState<ProposalState | "All">("All");
  const { proposals } = useFetchProposals({
    state: selectedState,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href={`/posts/${proposal.id}`}>{proposal.title}</Link>
            <div>{proposal.author.username}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>State: {proposal.status}</div>
            <div style={{ display: "flex", gap: ".1em" }}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
