import React, { useEffect, useState } from "react";

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
  // On client get the users wallet address from local storage if it exists
  const [account, setAccount] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("WalletAddress")
      : undefined
  );
  const [viewer, setViewer] = useState();

  // Listen for local storage events
  if (typeof window !== "undefined") {
    window.onstorage = () => {
      const address = window.localStorage.getItem("WalletAddress");
      if (address) setAccount(address);
    };
  }

  useEffect(() => {
    if (viewer === undefined && account) {
      fetchSyncedUser(account).then((viewer) => viewer && setViewer(viewer));
    }
  }, [viewer]);

  return viewer;
}

export const ViewerContext = React.createContext<Viewer | undefined>(undefined);

export const useViewer = () => React.useContext(ViewerContext);
