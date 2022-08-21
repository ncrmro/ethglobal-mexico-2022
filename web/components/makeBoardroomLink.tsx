import Link from "next/link";
import { User } from "../utils/mocks";

const MakeBoardroomLink = (props: User) => {
  const { address, username } = props;
  return (
    <Link passHref={true} href={`https://boardroom.io/voter/${address}`}>
      <a target="_blank">
        <button> {username}</button>
      </a>
    </Link>
  );
};

export default MakeBoardroomLink;
