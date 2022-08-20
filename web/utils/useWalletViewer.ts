/**
 * We should have an index of wallet address mapped to users
 */
export const mockUsers = {
  address1: {
    username: "Dr Who",
  },
  address2: {
    username: "Batman",
  },
  address3: {
    username: "Iron Man",
  },
};

export default function useWalletViewer() {
  return mockUsers["address1"];
}
