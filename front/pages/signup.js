import React from "react";
import Head from "next/head";

import PageLayout from "../layouts/pageLayout";

const signup = () => {
  return (
    <PageLayout current={"signup"}>
      <Head>
        <title>회원가입 | nodebird</title>
      </Head>
    </PageLayout>
  );
};

export default signup;
