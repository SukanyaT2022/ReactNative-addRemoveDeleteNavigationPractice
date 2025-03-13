import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RedoScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>RedoScreen-EntryPoint</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Redo2Screen')}><Text>Next redoScreen 2 btn</Text></TouchableOpacity>
    </View>
  )
}

export default RedoScreen

const styles = StyleSheet.create({})