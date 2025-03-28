import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface buttonProp{
message:string
onPressProp:()=>void
isSelected: boolean
disable?: boolean
}
const SelectButtonComp = ({message, onPressProp, isSelected, disable}:buttonProp) => {
  return (
    <TouchableOpacity 
    style={[isSelected?  styles.ChangeColorBtn : styles.main]}
    onPress={disable ? ()=> null : onPressProp}

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
ChangeColorBtn:{  
  alignItems:'center',
  padding:10,
  backgroundColor:'green',
},
})