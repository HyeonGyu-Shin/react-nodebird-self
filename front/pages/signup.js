import React, { useCallback, useState } from "react";
import Head from "next/head";
import { Form, Input, Button, Checkbox } from "antd";

import PageLayout from "../layouts/pageLayout";
import useInput from "../hooks/useInput";

// NOTE: 추후 디자인 변경해보자!!
const signup = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [term, setTerm] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(password !== e.target.value);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
  }, []);

  const onSubmit = useCallback((e) => {}, [id, nickname]);

  return (
    <PageLayout current={"signup"}>
      <Head>
        <title>회원가입 | nodebird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <Form.Item
          label="Username"
          name="user-name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input value={id} onChange={onChangeId} />
        </Form.Item>
        <Form.Item
          label="Nickname"
          name="user-nickname"
          rules={[{ required: true, message: "Please input your nickname!" }]}
        >
          <Input value={nickname} onChange={onChangeNickname} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="user-password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input value={password} onChange={onChangePassword} />
        </Form.Item>
        <Form.Item
          label="Password-check"
          name="user-password-check"
          rules={[
            { required: true, message: "Please input your password agin!" },
          ]}
        >
          <Input value={passwordCheck} onChange={onChangePasswordCheck} />
        </Form.Item>
        {passwordError && <div>비밀번호를 일치하게 입력해주세요!!</div>}
        <Form.Item
          name="term"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Checkbox checked={term} onChange={onChangeTerm}>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button htmlType="submit">제출하기!</Button>
          </div>
        </Form.Item>
      </Form>
    </PageLayout>
  );
};

export default signup;
