import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SelectButtonComp from './SelectButtonComp'
import SelectBtnPropComp4 from './SelectBtnPropComp4'

const MainbtnScreen4 = () => {
    const [selectValue, setSelectValue] = useState<boolean>(false)
    const [selectValue2, setSelectValue2] = useState<boolean>(false)
    const [selectValue3, setSelectValue3] = useState<boolean>(false)
  return (
    <View>
      <Text>MainbtnScreen4</Text>
  <SelectBtnPropComp4 selectPropColor={selectValue} disableBtnProp={selectValue2 || selectValue3} message="click 1" onPressProp={()=>setSelectValue(!selectValue)}/>
  <SelectBtnPropComp4 selectPropColor={selectValue2} disableBtnProp={selectValue || selectValue3} message="click 2" onPressProp={()=>setSelectValue2(!selectValue)}/>
  <SelectBtnPropComp4 selectPropColor={selectValue3} disableBtnProp={selectValue || selectValue2} message="click 3" onPressProp={()=>setSelectValue3(!selectValue)}/>
    </View>
  )

}
export default MainbtnScreen4

const styles = StyleSheet.create({})