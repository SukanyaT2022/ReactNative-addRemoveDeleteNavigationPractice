import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface btnProp{
message: string
onPressProp: ()=>void
selectPropColor:boolean
disableBtnProp: boolean
}
const SelectBtnPropComp4 = ({message, onPressProp, selectPropColor, disableBtnProp}:btnProp) => {
  return (
    <TouchableOpacity
     style={[selectPropColor? styles.changeColor : styles.mainStyle]}
     onPress={onPressProp}
     disabled = {disableBtnProp}
     >
      <Text>{message}</Text>
    </TouchableOpacity>
  )
}

export default SelectBtnPropComp4

const styles = StyleSheet.create({
mainStyle:{
  backgroundColor:'gray',
  padding: 10,
},
changeColor:{
  backgroundColor:'orange',
}
})