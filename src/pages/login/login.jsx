// src/pages/login/login.jsx
import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { AtButton, AtInput, AtMessage, AtIcon } from 'taro-ui';
import Taro from '@tarojs/taro';
import './login.less';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Taro.atMessage({
        message: '请填写用户名和密码',
        type: 'warning',
      });
      return;
    }

    // 模拟登录逻辑
    if (username === 'user' && password === '123456') {
      Taro.setStorageSync('token', 'mock-token'); // 模拟设置 token
      Taro.switchTab({ url: '/pages/index/index' });
    } else {
      Taro.atMessage({
        message: '用户名或密码错误',
        type: 'error',
      });
    }
  };

  return (
    <View className='login-page'>
      <AtMessage />
      <View className='login-container'>
        <View className='login-title'>登录</View>
        <View className='input-wrapper'>
          <AtIcon value='user' size='20' color='#999' />
          <AtInput
            name='username'
            type='text'
            placeholder='请输入用户名'
            value={username}
            onChange={(value) => setUsername(value)}
            className='full-width-input'
          />
        </View>
        <View className='input-wrapper'>
          <AtIcon value='lock' size='20' color='#999' />
          <AtInput
            name='password'
            type='password'
            placeholder='请输入密码'
            value={password}
            onChange={(value) => setPassword(value)}
            className='full-width-input'
          />
        </View>
        <AtButton type='primary' onClick={handleLogin} className='login-button'>
          登录
        </AtButton>
      </View>
    </View>
  );
};

export default Login;
