import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SelectButtonComp from './SelectButtonComp'

const RedoScreen = ({navigation}:any) => {

  const [selected, setSelected] = useState<boolean>(false)
  const [selected2, setSelected2] = useState<boolean>(false)
  const [selected3, setSelected3] = useState<boolean>(false)
  return (
    <View>
      <Text>RedoScreen-EntryPoint</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Redo2Screen')}><Text>Next redoScreen 2 btn</Text></TouchableOpacity>
   {/* select and disselect button */}
   <View style={styles.mainSelectBtn}>
 <SelectButtonComp message='Click One' onPressProp={()=>setSelected(!selected)} isSelected={selected} disable={selected2|| selected3}/> 
  {/* ! add to selected varible  help to flip to true if it set to false from thet usestate */}
 <SelectButtonComp  message='Click 2' onPressProp={()=>setSelected2(!selected2)} isSelected={selected2} disable={selected || selected3}/>
 <SelectButtonComp  message='Click 3'onPressProp={()=>setSelected3(!selected3)} isSelected={selected3} disable={selected || selected2}/>

   </View>
    </View>
  )
}

export default RedoScreen

const styles = StyleSheet.create({
  mainSelectBtn:{
    gap:10,
  }
  
})