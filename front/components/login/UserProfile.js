import { Card, Avatar, Button } from "antd";
import React, { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const onClickLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <div>
      <Card
        style={{ marginBottom: "10px" }}
        actions={[
          <dl>
            <dt>짹짹</dt>
            <dd>0</dd>
          </dl>,
          <dl>
            <dt>팔로잉</dt>
            <dd>0</dd>
          </dl>,
          <dl>
            <dt>팔로워</dt>
            <dd>0</dd>
          </dl>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Button onClick={onClickLogOut} htmlFor="button">
        로그아웃
      </Button>
    </div>
  );
};

export default UserProfile;
