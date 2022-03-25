import React from "react";
import { Dimensions, Pressable,StyleSheet,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function Button(props: {onPress: () => void, children: JSX.Element, icon?: {name: any, size: number, color: string}}){

  return(
    <Pressable style={({pressed}) => [styles.Button, pressed && styles.pressed]} onPress={props.onPress}>
      <Text style={styles.Text}>{props.children}</Text>

      {props.icon && <Ionicons style={styles.Icon} name={(props.icon.name)} size={props.icon.size} color={props.icon.color} />}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  Button: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    margin: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {height: 0, width: 1},
    shadowRadius: 1,
    borderRadius: 4,
    marginBottom: 40,
    width: (Dimensions.get("window").width /1.2),
    backgroundColor: '#B5C401',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.7
  },
  Text: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff"
  },
  Icon: {
    marginLeft: 5
  }
})

export default Button;
