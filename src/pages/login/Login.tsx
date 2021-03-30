import React from 'react';
import styles from './login.less';
import { Card, Form, Input, Button } from 'antd';

interface PropsInte {
  clicked: boolean;
}

const Login: React.FC<PropsInte> = ({ clicked }) => {
  const [loginForm] = Form.useForm();
  const onFinish = () => {
    loginForm.validateFields().then((result) => {
      console.log(result);
    });
  };

  const onReset = () => {
    loginForm.resetFields();
  };

  return (
    <div>
      <Card
        style={{ opacity: clicked ? 1 : 0 }}
        className={styles['login-card']}
      >
        <Form form={loginForm} onFinish={onFinish}>
          <Form.Item
            name="stuCode"
            label="学号"
            rules={[{ required: true, message: '学号不可为空' }]}
          >
            <Input placeholder="请输入学号，王老师也是哦" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '密码不可为空' }]}
          >
            <Input placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
