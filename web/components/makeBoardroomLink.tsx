import Link from "next/link";
import { User } from "../utils/mocks";
import { useViewer } from "../context/Viewer";
import { getUserApi } from "../routes/Users/getUserApi";
import { useEffect, useState } from "react";

const MakeBoardroomLink = (props: User) => {
  const { address, username } = props;
  const [isVerified, setVerified] = useState(false);

  const verifier = async () => {
    try {
      const user = await getUserApi(address);
      if (user) {
        const res = JSON.parse(user.response).worldcoin_verified;
        setVerified(res);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    verifier();
  }, []);

  return (
    <a
      href={`https://boardroom.io/voter/${address}`}
      target="_blank"
      rel="noreferrer"
    >
      {username} {isVerified && <>🌎🪙</>}
    </a>
  );
};

export default MakeBoardroomLink;
