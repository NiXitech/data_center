/* eslint-disable @typescript-eslint/no-unused-vars */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, message } from 'antd';
import React from 'react';
import { ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import { FormattedMessage, history, useModel } from 'umi';
// import Footer from '@/components/Footer';
// import { login } from '@/services/ant-design-pro/api';
import styles from './index.less';
// import { OnLoginCookie } from '@/services/cooike/cookie';
import { login } from '@/services/http/api';
import { SStorage } from '@/services/cooike/storage';
import { OnLoginCookie } from '@/services/cooike/cookie';
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
  const fetchUserInfo = async () => {
    // @ts-ignore
    const userInfo = await initialState?.fetchUserInfo?.();
    console.log('%c🀀 userInfo', 'color: #00e600; font-size: 20px;', userInfo);
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };
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
    console.log(values)
    try {
      // 登录
      // const msg: any = await login({
      //   email: values.email,
      //   pass_code: values.pass_code
      // });
      // @ts-ignore

      // if (msg.code === 200) {
      if (values.email === 'admin' && values.pass_code === 'admin') {
        message.success('登录成功！');
        // OnLoginCookie({
        //   token: msg.data.token.access_token,
        // });
        // SStorage.set('accessToken', msg.data.token.access_token)
        SStorage.set('accessToken', 11111)
        await fetchUserCookie();
        if (!history) return;
        const { query } = history.location;

        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
        return;
      } else {
        message.error('登录失败')
      }
    } catch (error) {
      // @ts-ignore
      message.error('登录失败，请重试！', error);
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
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={'email'}
              rules={[
                {
                  required: true,
                  message: 'email是必填项！',
                },
              ]}
            />
            <ProFormText.Password
              name="pass_code"
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
            {/* <ProFormCheckbox noStyle name="autoLogin" id="pages.login.rememberMe" >
              自动登录
            </ProFormCheckbox> */}
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            {/* <a
              style={{
                float: 'right',
              }}
            >
              忘记密码 ?
            </a> */}
          </div>
        </LoginForm>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Login;
