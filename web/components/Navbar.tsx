import { useRouter } from "next/router";
import Link from "next/link";

import { ToastContainer } from "react-toastify";
import { MetaMask } from "../context/MetaMask";

export const NavBar = () => {
  const { asPath: path } = useRouter();

  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: "0.25em",
          gap: "5rem",
          alignItems: "center",
          paddingInline: "3rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            gap: "3.5rem",
            listStyle: "none",
          }}
        >
          <li className={path === "/" ? "active-nav" : "nav-item"}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/proposals/create">Proposals</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <MetaMask />
        </div>
      </nav>
    </>
  );
};
