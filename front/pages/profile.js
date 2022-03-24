import React from "react";
import { Input, List, Card } from "antd";

import faker from "@faker-js/faker";

import FollowList from "../components/profile/FollowList";
import PageLayout from "../layouts/pageLayout";

const profile = () => {
  const followingList = [
    { nickname: faker.name.findName() },
    { nickname: faker.name.findName() },
    { nickname: faker.name.findName() },
  ];
  const followerList = [
    { nickname: faker.name.findName() },
    { nickname: faker.name.findName() },
    { nickname: faker.name.findName() },
  ];
  return (
    <PageLayout current={"profile"}>
      <Input addonBefore={"닉네임"}></Input>
      <FollowList header={"followingList"} data={followingList} />
      <FollowList header={"followerList"} data={followerList} />
    </PageLayout>
  );
};

export default profile;
