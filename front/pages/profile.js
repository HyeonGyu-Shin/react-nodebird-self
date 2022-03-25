import React from "react";
import Head from "next/head";
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
      <Head>
        <title>내 프로필 | nodebird</title>
      </Head>
      <Input addonBefore={"닉네임"}></Input>
      <FollowList header={"followingList"} data={followingList} />
      <FollowList header={"followerList"} data={followerList} />
    </PageLayout>
  );
};

export default profile;
