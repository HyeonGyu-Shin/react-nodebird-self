import React from "react";
import Head from "next/head";

import "antd/dist/antd.css";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Nodebird</title>
      </Head>
      <div>
        <Component></Component>
      </div>
    </>
  );
};

export default NodeBird;
