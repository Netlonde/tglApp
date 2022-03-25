import React from "react"
import { View, Text, TextInput, Dimensions } from "react-native";
import Button from "../../UI/Button";

import LoginContainer from "./styled";
// import { } from '../'

const Login: React.FC = () => {
  return(
    <LoginContainer>
      <View><Text>LOGO</Text></View>
      {/* <InputContainer>
        <Input placeholder="Email address:"/>
        <Input placeholder="Password:"/>
        <Button onPress={() => { }} icon={{color: "#fff", size: 26, name: "arrow-forward-outline"}}>
          <Text>Login</Text>
        </Button>
      </InputContainer> */}
    </LoginContainer>
  )
}

export default Login;
