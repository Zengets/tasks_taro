import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import useModel from '../../hooks/useModel';
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'


function Index() {
  const { initialState, setInitialState } = useModel();

  const handleUpdateState = () => {
    // 支持函数形式
    setInitialState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  return (<View >
    <Text>Hello world!{initialState.count}</Text>
    <AtButton type='primary' onClick={handleUpdateState}>I need Taro UI</AtButton>
  </View>);
}

export default Index;
