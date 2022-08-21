import type { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import { proposalState, ProposalState } from "../../utils/mocks";
import useFetchProposals from "./useFetchProposals";
import { useViewer } from "../../context/Viewer";

// TODO filter by the viewers doas
/**
 * Show all the user's threads
 * @constructor
 */
export const ProposalsRoute: NextPage = () => {
  const viewer = useViewer();
  const [selectedState, setState] = useState<ProposalState | "All">("All");
  const { proposals } = useFetchProposals({
    state: selectedState,
  });
  const doasCount = viewer?.daos ? Object.keys(viewer.daos).length : 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ margin: 0, marginBottom: "0.3em" }}>Proposals</h1>
          {doasCount > 0 && `${doasCount} DOA`}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <label htmlFor="state" style={{ textAlign: "right" }}>
            State
          </label>
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
        <div style={{ display: "flex", gap: ".2rem" }}>
          <div>Replies</div>
          <div>Views</div>
          <div>Activity</div>
          <div>State</div>
        </div>
      </div>
      {proposals.map((proposal) => (
        <div key={proposal.id} style={{ display: "flex" }}>
          <Link href={`/posts/${proposal.id}`}>{proposal.title}</Link>
          <div>
            <div style={{ textAlign: "right" }}>{proposal.doaId}</div>
            <div style={{ display: "flex", gap: ".2em" }}>
              <div>4</div>
              <div>2</div>
              <div>3</div>
              <div>{proposal.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
