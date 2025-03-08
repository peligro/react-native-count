import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FAB from './componentes/FAB';

export default function App() {
  const [count, setCount] = useState(10);
  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Text style={[styles.textHuge]}>{count}</Text>
     <FAB 
      label={`+1`}
      onPressPersonalizada={()=>{setCount(count+1)}}
      onLongPressPersonalizada={()=>{setCount(0)}}
      posicion='right' />

    <FAB 
      label={`-1`}
      onPressPersonalizada={()=>{setCount(count-1)}} 
      posicion='left' />
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: '100'
  }
});
