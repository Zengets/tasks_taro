
import { Provider } from 'react-redux';
import { navigateTo, switchTab, onThemeChange, getSystemInfo } from '@tarojs/taro';
import store from './store';
import { getToken } from './utils/auth';
import React, { useState, useEffect } from 'react';
import { useAsyncEffect } from 'ahooks';
import './app.less'


function App({ children }) {

  useAsyncEffect(async () => {
    const token = getToken();
    if (token) {
      // 如果存在 token，跳转到 Tab 页 相当于PC的layout
      switchTab({ url: '/pages/home/home' });
    } else {
      // 如果不存在 token，跳转到登录页
      navigateTo({ url: '/pages/login/login' });
    }

    //动态主题
    let res = await getSystemInfo({
      success: res => console.log(res)
    })
    themechange(res?.theme)

    //切换主题
    onThemeChange(theme => {
      themechange(theme)
    })



  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );

  function themechange(theme) {
    if (theme === 'light') {
    } else {
    }
  }
}



export default App
