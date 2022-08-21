import MakeBoardroomLink from "../../components/makeBoardroomLink";
import React from "react";
import { User as UserType } from "../../utils/mocks";
import { useRouter } from "next/router";

export const UserRoute = (props: { user: UserType }) => {
  const router = useRouter();
  return (
    <div>
      <MakeBoardroomLink {...props.user} />
    </div>
  );
};
