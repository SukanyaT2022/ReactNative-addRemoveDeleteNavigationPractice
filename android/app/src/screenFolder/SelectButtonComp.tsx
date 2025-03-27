import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface buttonProp{
message:string
onPressProp:()=>void
}
const SelectButtonComp = ({message, onPressProp}:buttonProp) => {
  return (
    <TouchableOpacity 
    style={styles.main}
    onPress={onPressProp}
    >
      <Text>{message}</Text>
    </TouchableOpacity>
  )
}

export default SelectButtonComp

const styles = StyleSheet.create({
main:{
    backgroundColor: "gray",
    alignItems:'center',
    padding:10,

  
},
})