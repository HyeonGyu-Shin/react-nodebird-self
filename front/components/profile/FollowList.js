import React from "react";
import { List, Card } from "antd";

const FollowList = ({ header, data }) => {
  return (
    <>
      <List
        grid={{ gutter: 16, column: 3 }}
        header={<div>{header}</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.nickname}></Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default FollowList;
