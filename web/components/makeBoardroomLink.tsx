import Link from "next/link";
import { User } from "../utils/mocks";
import { useViewer } from "../context/Viewer";
import { getUserApi } from "../routes/Users/getUserApi";
import { useState } from "react";

const MakeBoardroomLink = (props: User) => {
  const viewer = useViewer();
  const { address, username } = props;
  const [isVerified, setVerified] = useState(false);

  const verifier = async () => {
    const user = await getUserApi(address);
    const res = JSON.parse(user.response).worldcoin_verified;
    setVerified(res);
    return res;
  };
  verifier();
  return (
    <>
      <Link passHref={true} href={`https://boardroom.io/voter/${address}`}>
        <a target="_blank">
          <button>
            <p>
              {isVerified && "🌎🪙 Verified User:  "}
              {username}
            </p>
          </button>
        </a>
      </Link>
    </>
  );
};

export default MakeBoardroomLink;
