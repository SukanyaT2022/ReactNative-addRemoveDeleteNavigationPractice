import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface BtnProp{
    message:string,
    onPressProp:()=>void
    selectedProp: boolean
    disable: boolean
  }
const SelectBtnComp2 = ({message,onPressProp, disable, selectedProp}:BtnProp) => {
  return (
    <TouchableOpacity
     style={[selectedProp?  styles.changeColor: styles.main]}
onPress={disable? ()=> null : onPressProp}
     >
      <Text>{message}</Text>
    </TouchableOpacity>
  )
}

export default SelectBtnComp2

const styles = StyleSheet.create({
main:{
    backgroundColor:"pink",
    padding:10,
},
changeColor:{
  backgroundColor:'red',
}
})