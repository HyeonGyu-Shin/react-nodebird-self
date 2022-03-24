import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback((e) => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, []);

  return (
    <>
      <Form onFinish={onSubmitForm} style={{ padding: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="user-id">아이디</label>
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="user-password">비밀번호</label>
          <Input
            name="user-password"
            placeholder="비밀번호"
            value={password}
            type={"password"}
            onChange={onChangePassword}
            required
          ></Input>
        </div>
        <div>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
