import React from 'react'
import { Button, Input } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components';
import CProvider from '@/components/CProvider';
import { IconFont } from '@nutui/icons-react-taro'
import './login.less';


const Login = () => {


  return (
    <CProvider>
      <View className='login-page'>
        <Text className='title'>
          欢迎使用
        </Text>
        <View className='form-container'>
          <View className="center formbar" >
            <IconFont fontClassName="iconfont" classPrefix="icon" name="user" />
            <Input placeholder='用户名'></Input>
          </View>
          <View className="center formbar" >
            <IconFont fontClassName="iconfont" classPrefix="icon" name="lock" />
            <Input placeholder='密码' style={{ backgroundColor: "transparent" }}></Input>
          </View>
        </View>
        <Button type="primary" >账号密码</Button>
      </View>
    </CProvider>
  )
}
export default Login
