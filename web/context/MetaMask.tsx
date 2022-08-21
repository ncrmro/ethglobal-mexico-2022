import { useContext, Dispatch, SetStateAction } from "react";
import { Web3Context } from "./Web3Context";
import { Web3Provider } from "@ethersproject/providers";
// Todo: import Contract
import { ethers } from "ethers";
import { useViewer } from "../context/Viewer";
import { Provider } from "web3modal";
import { verifyUserApi } from "./../routes/Users/verifyUserApi";

declare let window: any;

export interface Web3 {
  //contract: ;
  provider: Web3Provider;
  account: string;
  setWeb3?: Dispatch<SetStateAction<Web3>>;
}

export const MetaMask = () => {
  const viewer = useViewer();
  const { account, setWeb3 } = useContext(Web3Context);

  async function enableEth() {
    const ethereum = window.ethereum;
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const [address] = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const chainId = await ethereum.request({ method: "eth_chainId" });

        let contractAddress: string;
        switch (chainId) {
          case "0x1": // Mainnet
            contractAddress = "";
            break;
          case "0x3": // Ropsten
            contractAddress = "";
            break;
          case "0x4": // Rinkeby
            contractAddress = "";
            break;
          case "0x89": // Polygon Mainnet
            contractAddress = "";
            break;
          case "0x13881": // Polygon Testnet
            contractAddress = "";
            break;
          default:
            // Hardhat Local
            contractAddress = "";
        }

        const getWorldCoinVerified = async () => {
          // const web3 = new ethers.providers.Web3Provider(window.ethereum)
          const contract = new ethers.Contract(
            "0x8f9b3a2eb1dfa6d90dee7c6373f9c0088feeebab",
            [
              {
                inputs: [
                  {
                    internalType: "contract IWorldID",
                    name: "_worldId",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "_groupId",
                    type: "uint256",
                  },
                  { internalType: "string", name: "_actionId", type: "string" },
                ],
                stateMutability: "payable",
                type: "constructor",
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: "uint256",
                    name: "profileId",
                    type: "uint256",
                  },
                ],
                name: "ProfileUnverified",
                type: "event",
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: "uint256",
                    name: "profileId",
                    type: "uint256",
                  },
                ],
                name: "ProfileVerified",
                type: "event",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                name: "isVerified",
                outputs: [{ internalType: "bool", name: "", type: "bool" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "profileId",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "root", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "nullifierHash",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256[8]",
                    name: "proof",
                    type: "uint256[8]",
                  },
                ],
                name: "verify",
                outputs: [],
                stateMutability: "payable",
                type: "function",
              },
            ],
            provider
          );
          const lensID = "0xf5";
          const res = await contract.isVerified(lensID);
          res ? await verifyUserApi(viewer) : null;
        };
        getWorldCoinVerified();
        const signer = provider.getSigner(address);
        const account = signer._address;
        window.localStorage.setItem("WalletAddress", account);
        window.dispatchEvent(new Event("storage")); // <-----

        // TODO ADD specific contract
        //const contract =

        setWeb3 &&
          setWeb3((prev: Web3) => ({
            ...prev,
            // contract,
            provider,
            account,
          }));
      } else if (window.web3) {
        console.log("Update MetaMask");
      } else {
        console.log("Enable MetaMask");
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      {!account ? (
        <button className="metamask-btn" onClick={enableEth}>
          Connect Wallet
        </button>
      ) : (
        <p style={{ whiteSpace: "nowrap" }}>
          Hello <b>{viewer?.username ? viewer.username : viewer?.address}</b>
        </p>
      )}
    </div>
  );
};
