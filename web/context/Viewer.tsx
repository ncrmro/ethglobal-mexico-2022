import React from "react";
import { useWeb3 } from "./Web3Context";

interface Viewer {
  username: string;
  account: string;
}

/**
 * This is used at the top level of the application
 * and passed into the ViewerContext which the useViewer hook
 * uses
 */
export function useViewerObservable(): Viewer | undefined {
  const web3 = useWeb3();
  if (web3) {
    return { username: "test", account: web3.account };
  }
}

export const ViewerContext = React.createContext<Viewer | undefined>(undefined);

export const useViewer = () => React.useContext(ViewerContext);
