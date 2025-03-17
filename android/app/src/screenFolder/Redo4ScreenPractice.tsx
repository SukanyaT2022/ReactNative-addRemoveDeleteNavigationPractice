import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {use, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Redo4ScreenPractice = () => {
  const [carArray, setCarArray] = useState<string[]>([
    'truck',
    'vans',
    'sedan',
    'minivan',
  ]);
  const [selectCar, setSelectCar] = useState<string>('');
  const selectFunc = (item: string) => {
    setSelectCar(item);
    console.log(item);
  };

  const [holdDeleteCarType, setholdDeleteCarType] = useState<string[]>([]);
  const deleteFunc = (item: string) => {
    setholdDeleteCarType(prevState => {
      //when e want to delete -check if car we want to delete exist-.some use to check item there
      let check: boolean = prevState.some(car => item == car);
      if (check) {
        return prevState;
      } else {
        return [...prevState, item];
      }
    });
setCarArray((prevState)=>prevState.filter((value)=>value !== item))
  };
const refreshBtnFunc =()=>{
setCarArray((prevState)=>{
let check:boolean = holdDeleteCarType.some((item)=>prevState.includes(item))
if (check) {
  return prevState;
} else {
  return [...prevState, ...holdDeleteCarType];
}
})
}

  return (
    <View>
      <Text>Redo4ScreenPractice</Text>
      <View style={styles.wrapper}>
        {carArray.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => selectFunc(item)}
              style={[
                styles.mainBoxStyle,
                selectCar == item && styles.changeColorSelect,
              ]}>
              <Text>{item}</Text>
              <Icon
                name="plus"
                size={10}
                color="#900"
                // style={{marginTop: 100}}
                onPress={() => deleteFunc(item)}
              />
            </TouchableOpacity>

          );
        })}
      </View>
      <TouchableOpacity onPress={()=>refreshBtnFunc()} style={{backgroundColor:'green'}}><Text>Refresh Btn</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBoxStyle: {
    backgroundColor: 'orange',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'space-between',
  },
  changeColorSelect: {
    backgroundColor: 'pink',
  },
});
export default Redo4ScreenPractice;
