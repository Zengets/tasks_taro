
import { Provider } from 'react-redux';
import { navigateTo, switchTab } from '@tarojs/taro';
import store from './store';
import { getToken } from './utils/auth';
import React, { useState, useEffect } from 'react';
import './app.less'

function App({children}) {

  useEffect(() => {
    const token = getToken();
    if (token) {
      // 如果存在 token，跳转到 Tab 页 相当于PC的layout
      switchTab({ url: '/pages/home/home' });
    } else {
      // 如果不存在 token，跳转到登录页
      navigateTo({ url: '/pages/login/login' });
    }
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}



export default App
