import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome';

const Redo2Screen = ({navigation}:any) => {
  const [carArray, setCarArray] = useState<string[]>([
      'truck',
      'suv',
      'van',
      'other',
    ]);
    const [userSelect, setUserSelect] = useState<string>('');
    const selectFunc = (item: string) => {
      console.log(item);
      setUserSelect(item);
    };
    console.log(userSelect);
    return (
   
  
      <View style={{flex: 1}}>
      
        <Text style={{fontFamily: 'Roboto', marginTop: 100, fontSize: 50}}>
          Test google font
        </Text>
        <Text>RedoScren 3 add delete function </Text>
        <Icon name="rocket" size={30} color="#900" style={{marginTop: 100}} />
  
        {/* //map array */}
        <View style={styles.wrapperStyle}>
          {carArray.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.oneBoxStyle,
                  userSelect == item && styles.changeColorAfterSelect,
                ]}
                onPress={() => selectFunc(item)}>
                <Text>{item}</Text>
                <Icon name="rocket" size={20} color="#900" />
              </TouchableOpacity>
              
            );
          })}
        </View>
        {/* //end map view */}

            {/* <TouchableOpacity onPress={()=>navigation.navigate('Redo2Screen')}><Text>Next redoScreen 3 add delete func btn</Text></TouchableOpacity> */}
       
      </View>
    );
  }
  

const styles = StyleSheet.create({
  oneBoxStyle: {
    backgroundColor: 'lightgreen',
    padding: 15,
    flexDirection: 'row',
    gap: 6,
  },
  wrapperStyle: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'space-between',
  },
  changeColorAfterSelect: {
    backgroundColor: 'orange',
    borderColor:'green',
    borderWidth:2,
  },
  buttonStyle: {
    padding: 20,
    backgroundColor: 'orange',
    width: '50%',
    margin: 'auto',
  },
});
export default Redo2Screen