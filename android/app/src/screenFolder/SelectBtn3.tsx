import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonProp{
message:string,
onPressProp: ()=>void
disableProp: boolean
selected:boolean // this selected is property that need value
}

const SelectBtn3 = ({message, onPressProp, disableProp, selected}:ButtonProp) => {
  return (
    <TouchableOpacity 
    onPress={onPressProp}
    disabled ={disableProp}
    style={[selected? styles.changeSelectColor:styles.mainBtn]}
    >
    <Text>{message}</Text>
    </TouchableOpacity>
  )
}

export default SelectBtn3

const styles = StyleSheet.create({
mainBtn:{
    backgroundColor:'green',
    padding:10,
},
changeSelectColor:{
  backgroundColor:'pink'
}

})