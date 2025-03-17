import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome';
import { screen } from '../../../../App';
const Redo3Screen = ({navigation}:any) => {
 const [carArray, setCarArray] = useState<string[]>([
       'truck',
       'suv',
       'van',
       'other',
     ]);
//step1 of delete crate array that hold what user delete
const [holdDeleteArray, setHoldDeleteArray] = useState<string[]>([])


//hold whta user select
     const [userSelect, setUserSelect] = useState<string>('');
     const selectFunc = (item: string) => {
       console.log(item);
       setUserSelect(item);
     };
     console.log(userSelect);

     //step 3 crate deletefunc
     const deleteFunc=(carType:string)=>{
setHoldDeleteArray((previousState)=>[...previousState, carType])
// step5  delete is update and remove ehat we delete
setCarArray((previousState)=>previousState.filter((item)=>item !== carType))
//[...previousState] means copy all what ever is previous state
     }
     return (
    
   // this one add remove function
       <View style={{flex: 1}}>

         <Text style={{fontFamily: 'Roboto', marginTop: 100, fontSize: 50}}>
           Test google font
         </Text>
         <Text>Redo3Screen3 --add delete func</Text>

   
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
         
         {/* //stp2 click rocket to delete--pass on press and define deletefunc  */}
         {/* step 4 delete pput call back function on deletefunc--{()=>deleteFunc(item)} */}
         <Icon name="rocket" size={30} color="#900" style={{marginTop: 100}} onPress={()=>deleteFunc(item)} />
               </TouchableOpacity>
             );
           })}
         </View>
         {/* //end map view */}
        
        {/* contnut next week refreshfunc */}
        {/* <TouchableOpacity onPress={()=>{
setCarArray((prevState)=>{
  const check:boolean = prevState.sum
})
setHoldDeleteArray([])//make holddeletearray empty

        }}><Text>Refresh btn</Text></TouchableOpacity> */}

        <TouchableOpacity onPress={()=>navigation.navigate(screen.redo4ScreenPractice)}><Text>Click Next to Redo4Screen</Text></TouchableOpacity>
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
