/* eslint-disable @typescript-eslint/no-unused-vars */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, message } from 'antd';
import React from 'react';
import { ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import { history, useModel } from 'umi';
// import Footer from '@/components/Footer';
// import { login } from '@/services/ant-design-pro/api';
import styles from './index.less';
// import { OnLoginCookie } from '@/services/cooike/cookie';
import { login } from '@/services/http/api';
import { SStorage } from '@/services/cooike/storage';
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);
const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  console.log('%c🀁 initialState', 'color: #aa00ff; font-size: 20px;', initialState);
  // const fetchUserInfo = async () => {
  //   const userInfo = await initialState?.fetchUserInfo?.();
  //   console.log('%c🀀 userInfo', 'color: #00e600; font-size: 20px;', userInfo);
  //   if (userInfo) {
  //     await setInitialState((s) => ({
  //       ...s,
  //       currentUser: userInfo,
  //     }));
  //   }
  // };
  const fetchUserCookie = async () => {
    const token = await initialState?.fetchUserCookie?.();
    if (token) {
      await setInitialState((s) => ({
        ...s,
        currentUser: token,
      }));
    }
  };
  // values: API.LoginParams
  const handleSubmit = async (values: any) => {
    try {
      // 登录
      // const msg: any = await login({
      //   email: values.email,
      //   pass_code: values.pass_code
      // });
      // @ts-ignore

      if (values.username === 'admin', values.password === 'admin') {
        message.success('登录成功！');

        // OnLoginCookie({
        //   token: msg.data.token.access_token,
        // });
        SStorage.set('accessToken', 1111)
        await fetchUserCookie();

        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
      }

      // console.log(msg); // 如果失败去设置用户错误信息
    } catch (error) {
      console.log('%c🀀 error', 'color: #00bf00; font-size: 20px;', error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={[styles.content, 'login_from'].join(' ')}>
        <LoginForm
          logo={<img alt="logo" src="/logo_icon.png" />}
          title="Data Center"
          subTitle={'数据中台'}
          initialValues={{
            autoLogin: true,
          }}
          // values: any
          onFinish={async (values: any) => {
            // await handleSubmit(values as API.LoginParams);
            await handleSubmit(values);
          }}
        >
          {status === 'error' && <LoginMessage content={'错误的用户名和密码(admin/admin)'} />}
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={'username'}
              rules={[
                {
                  required: true,
                  message: 'username是必填项！',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '密码是必填项！',
                },
              ]}
            />
          </>

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码 ?
            </a>
          </div>
        </LoginForm>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Login;
