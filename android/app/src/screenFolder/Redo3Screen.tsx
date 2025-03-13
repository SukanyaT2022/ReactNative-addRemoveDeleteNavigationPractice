import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome';
const Redo3Screen = ({navigation}:any) => {
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
    
   // this one add remove function
       <View style={{flex: 1}}>
        <Text>RedoScreen3 add delete func</Text>
         <Text style={{fontFamily: 'Roboto', marginTop: 100, fontSize: 50}}>
           Test google font
         </Text>
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
export default Redo3Screen
