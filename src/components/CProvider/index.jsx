import React, { useState } from "react";
import PropTypes from "prop-types";
import { ConfigProvider } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import theme from "@/theme.json";
import { useAsyncEffect } from "ahooks";

const CProvider = ({ children, full = false }) => {
  const [themeProvider, setThemeProvider] = useState(theme?.light);
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useAsyncEffect(async () => {
    //动态主题
    let res = await Taro.getSystemInfo({
      success: (res) => console.log(res),
    });
    setThemeProvider({
      theme: res.theme,
      provide: theme[res?.theme]
    });
    setStatusBarHeight(full ? 0 : res?.statusBarHeight);

    //切换主题
    Taro.onThemeChange((res) => {
      setThemeProvider(theme[res]);
    });
  }, []);

  return (
    <ConfigProvider
      theme={themeProvider.provide}
      style={{
        height: `calc(100% - ${statusBarHeight}px)`,
        background: themeProvider.theme === 'dark' ? 'linear-gradient(135deg,#414345,#232526)' : 'linear-gradient(135deg,#ece9e6,#ffffff)',
        paddingTop: statusBarHeight,
        overflow: "hidden",
      }}
    >
      {children}
    </ConfigProvider>
  );
};

CProvider.propTypes = {
  children: PropTypes.node.isRequired, // 确保传递的子元素存在
  full: PropTypes.bool, // 传递布尔值，默认为 false
};

export default CProvider;
