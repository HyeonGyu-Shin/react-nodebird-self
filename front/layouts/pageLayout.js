import React from "react";
import Link from "next/link";

import { Col, Input, Menu, Row } from "antd";
import LoginForm from "../components/login/LoginForm";

const PageLayout = ({ children, current }) => {
  return (
    <>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search
            placeholder="친구를 찾아보세요!"
            allowClear
            enterButton
            style={{ verticalAlign: "middle", padding: "10px", height: "54px" }}
          />
        </Menu.Item>
      </Menu>
      <Row style={{ textAlign: "center" }} gutter={8}>
        <Col xs={6}>
          <LoginForm></LoginForm>
        </Col>
        <Col xs={12}>{children}</Col>
        <Col xs={6}>오른쪽 메뉴</Col>
      </Row>
    </>
  );
};

export default PageLayout;
