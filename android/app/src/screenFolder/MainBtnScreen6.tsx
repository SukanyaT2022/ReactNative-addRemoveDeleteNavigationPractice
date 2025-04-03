import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SelectBtnComp6 from './SelectBtnComp6'

const MainBtnScreen6 = () => {
const [selectValue, setSelectValue] = useState<boolean>(false)
const [selectValue2, setSelectValue2] = useState<boolean>(false)
const [selectValue3, setSelectValue3] = useState<boolean>(false)
  return (
    <View>
   <SelectBtnComp6 message='click me 1' onPressProp={()=>setSelectValue(!selectValue)} selectPropColor={selectValue}/>
   <SelectBtnComp6 message='click me 2' onPressProp={()=>setSelectValue2(!selectValue2)} selectPropColor={selectValue2}/>
   <SelectBtnComp6 message='click me 3' onPressProp={()=>setSelectValue3(!selectValue3)} selectPropColor={selectValue3}/>
    </View>
  )
}

export default MainBtnScreen6

const styles = StyleSheet.create({})