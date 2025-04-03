import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface btnprop{
message:string
onPressProp: ()=>void
selectPropColor: boolean
}

const SelectBtnComp6 = ({message, onPressProp, selectPropColor}:btnprop) => {
  return (
    <TouchableOpacity 
    onPress={onPressProp}
    style={selectPropColor? styles.changeColor : styles.main}

    >
    <Text>{message}</Text>
    </TouchableOpacity>
  )
}

export default SelectBtnComp6

const styles = StyleSheet.create({
main:{
    backgroundColor:'green',
    padding:10,
},
changeColor:{
    backgroundColor:'orange',
}

})