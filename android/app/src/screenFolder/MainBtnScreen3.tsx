import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SelectBtn3 from './SelectBtn3'

const MainBtnScreen3 = () => {
  //select change fron true ti false-- select is value
  const [select, setSelect] = useState<boolean>(false)
  const [select2, setSelect2] = useState<boolean>(false)
  const [select3, setSelect3] = useState<boolean>(false)
  return (
    <View>
      <Text>MainBtnScreen3</Text>
      <SelectBtn3 selected={select} message={'Click me 1'} onPressProp={()=>setSelect(!select)} disableProp={select2 || select3}/>
      <SelectBtn3 selected={select2} message={'Click me 2'} onPressProp={()=>setSelect2(!select2)} disableProp={select || select3}/>
      <SelectBtn3 selected={select3} message={'Click me 3'} onPressProp={()=>setSelect3(!select3)} disableProp={select || select2}/>
    </View>
  )
}

export default MainBtnScreen3

const styles = StyleSheet.create({})