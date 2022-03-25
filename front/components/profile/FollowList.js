import React from "react";
import { List, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";

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
            <Card actions={[<StopOutlined key="stop" />]}>{item.nickname}</Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default FollowList;
