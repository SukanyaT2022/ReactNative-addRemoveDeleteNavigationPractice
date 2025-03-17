import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
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

  return (
    <View>
      <Text>Redo4ScreenPractice</Text>
      <View style={styles.wrapper}>
        {carArray.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => selectFunc(item)}
              style={[styles.mainBoxStyle, selectCar == item && styles.changeColorSelect]}>
              <Text>{item}</Text>
              <Icon
                name="plus"
                size={10}
                color="#900"
                // style={{marginTop: 100}}
              />
            </TouchableOpacity>
          );
        })}
      </View>
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
