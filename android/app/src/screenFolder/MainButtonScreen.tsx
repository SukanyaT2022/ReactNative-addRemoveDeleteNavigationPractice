import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SelectBtnComp2 from './SelectBtnComp2'


const MainButtonScreen = () => {
  const [select, setSelect] = useState<boolean>(false)
  const [select2, setSelect2] = useState<boolean>(false)
  const [select3, setSelect3] = useState<boolean>(false)
  return (
    <View>
<SelectBtnComp2 message = "button1" onPressProp={()=>setSelect(!select)} disable={select2 || select3} selectedProp={select}/>
<SelectBtnComp2 message = "button2" onPressProp={()=>setSelect2(!select2)} disable={select || select3} selectedProp={select2}/>
<SelectBtnComp2 message = "button3" onPressProp={()=>setSelect3(!select3)} disable={select || select2} selectedProp={select3}/>
    </View>
  )
}

export default MainButtonScreen

const styles = StyleSheet.create({

})