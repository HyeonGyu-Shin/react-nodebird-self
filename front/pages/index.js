import React from "react";
import PageLayout from "../layouts/pageLayout";

const Home = () => {
  return (
    <PageLayout current={"home"}>
      <div className="hi">hello world</div>
    </PageLayout>
  );
};

export default Home;
