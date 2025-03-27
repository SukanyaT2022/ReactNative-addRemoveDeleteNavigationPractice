import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SelectButtonComp from './SelectButtonComp'



const RedoScreen = ({navigation}:any) => {

  const [selected, setSelected] = useState<boolean>(false)
  return (
    <View>
      <Text>RedoScreen-EntryPoint</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Redo2Screen')}><Text>Next redoScreen 2 btn</Text></TouchableOpacity>
   {/* select and disselect button */}
   <View style={styles.mainSelectBtn}>
 <SelectButtonComp message='Click One' onPressProp={()=>setSelected(!selected)}/> 
  {/* ! add to selected varible  help to flip to true if it set to false from thet usestate */}
 <SelectButtonComp  message='Click 2' onPressProp={()=>console.log('click 2')}/>
 <SelectButtonComp  message='Click 3'onPressProp={()=>console.log('click 3')}/>

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