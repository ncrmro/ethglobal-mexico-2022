import { useRouter } from "next/router";
import Link from "next/link";

import { ToastContainer } from "react-toastify";
import { MetaMask } from "../context/MetaMask";

export const NavBar = () => {
  const { asPath: path } = useRouter();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "5rem",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Link href="/" className={path === "/" ? "active-nav" : "nav-item"}>
        Home
      </Link>
      <Link href="/proposals/create">Proposals</Link>
      <div className="flex items-center">
        <MetaMask />
      </div>
    </nav>
  );
};
