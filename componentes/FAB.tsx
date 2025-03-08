import { Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
//podemos hacerlo también con Pressable, ya que es más recomendado
/*
  <TouchableOpacity
            activeOpacity={0.6}
            style={
                [
                    styles.floatingButton, 
                    posicion ==='right'?styles.positionRight : styles.positionLeft
                ]}
            onPress={onPressPersonalizada }
            onLongPress={onLongPressPersonalizada}
        >
            <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
        </TouchableOpacity>
*/
interface Props{
    label:string;
    posicion?:'left'|'right'
    //métodos, el signo de ? es para definir que no son obligatorios
    onPressPersonalizada?:()=>void;
    onLongPressPersonalizada?:()=>void;
}

export default function FAB({
label, onPressPersonalizada, onLongPressPersonalizada, posicion='right'
}:Props) {
    
    return (
        
        <Pressable
            style={ ({pressed})=>[
                styles.floatingButton, 
                posicion ==='right'?styles.positionRight : styles.positionLeft,
                pressed ? {opacity:0.7} : {opacity:1}
            ]}
            onPress={onPressPersonalizada }
            onLongPress={onLongPressPersonalizada}
        >
            <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    floatingButton: {
      position: 'absolute',
      bottom: 20,
  
      backgroundColor: '#65558F',
      padding: 20,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      elevation: 3,
      shadowRadius: 4,
    },
  
    positionRight: {
      right: 20,
    },
    positionLeft: {
      left: 20,
    },
  });