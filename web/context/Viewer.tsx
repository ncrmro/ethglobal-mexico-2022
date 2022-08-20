import React, { useEffect, useState } from "react";
import { useWeb3 } from "./Web3Context";

interface Viewer {
  username: string;
  account: string;
}

async function fetchSyncedUser(account: string) {
  if (typeof window !== "undefined") {
    const res = await fetch(`${window.location.origin}/api/viewer`, {
      method: "POST",
      body: JSON.stringify({ account }),
    });
    if (res.ok) {
      return await res.json();
    }
  }
}

declare let window: any;

const isClient =
  typeof window !== "undefined" && typeof window.ethereum !== "undefined";

/**
 * This is used at the top level of the application
 * and passed into the ViewerContext which the useViewer hook
 * uses
 */
export function useViewerObservable(): Viewer | undefined {
  const [viewer, setViewer] = useState();
  // console.log("VIEWER OBSR", isClient && window.ethereum);

  useEffect(() => {
    if (isClient) {
      console.log("LOG", window.ethereum);
      window.ethereum.on("accountsChanged", () => {
        console.log("Ayee");
      });
      return () => {
        window.ethereum.removeListener("accountsChanged", () => {});
      };
    }
  }, [isClient]);

  useEffect(() => {
    const account = window.localStorage.getItem("WalletAddress")
      ? window.localStorage.getItem("WalletAddress")
      : null;
    if (viewer === undefined) {
      fetchSyncedUser(account).then((viewer) => viewer && setViewer(viewer));
    }
  }, [viewer]);

  return viewer;
}

export const ViewerContext = React.createContext<Viewer | undefined>(undefined);

export const useViewer = () => React.useContext(ViewerContext);
