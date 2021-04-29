import React, { useState } from 'react';
import styles from './login.less';
import { Card, Form, Input, Button, message } from 'antd';
import { login } from '../service/login';
import md5 from 'md5';
import { history, useRequest } from 'umi';

interface PropsInte {
  clicked: boolean;
}

const Login: React.FC<PropsInte> = ({ clicked }) => {
  const [loading, setLoading] = useState(false);
  const [loginForm] = Form.useForm();

  const onFinish = () => {
    setLoading(true);
    loginForm.validateFields().then((result) => {
      login({ stuCode: result.stuCode, password: md5(result.password) }).then(
        (res) => {
          if (res.msg !== 'ok') {
            message.error('请检查您的学号与密码');
            setLoading(false);
          } else {
            message.success('欢迎回来~');
            history.push('/home');
          }
        },
      );
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
        <h1 className={styles.title}>"预"见一班</h1>
        <Form form={loginForm} onFinish={onFinish}>
          <Form.Item
            name="stuCode"
            label="学号"
            rules={[{ required: true, message: '学号不可为空' }]}
          >
            <Input placeholder="请输入学号，王老师也是哦~" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '密码不可为空' }]}
          >
            <Input placeholder="请输入密码" type="password" />
          </Form.Item>
          <Form.Item style={{ textAlign: 'right' }}>
            <Button
              style={{
                backgroundColor: '#A7503F',
                color: 'white',
                marginRight: 10,
              }}
              htmlType="submit"
              loading={loading}
            >
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
