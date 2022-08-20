import WalletConnectProvider from "@walletconnect/web3-provider";

const infuraKey = process.env.INFURA_KEY;

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: infuraKey, // required
    },
  },
};
