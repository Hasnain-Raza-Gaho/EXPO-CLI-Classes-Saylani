import {View,Text,StyleSheet,Image,TextInput,Button,TouchableOpacity } from 'react-native'
import { useState } from 'react'



export default function App(){

  let   [name,setname ] = useState()

  return(
   <View >
     <TextInput
      secureTextEntry={true}
      keyboardType={"email-address"}
      maxLength={10}
      onChangeText={(e)=>setname(e)} //get value and update into variable
        style={{width:100,margin:20,backgroundColor:"blue",color:"white"}}/>
     
     {/* <Button title="onpress" style={{width:200}} onPress={()=>console.log(name)}></Button> */}
     <View style={{justifyContent:"center",alignItems:"center"}}>
     <TouchableOpacity style={{backgroundColor:"red"}} activeOpacity={0.5} onPress={()=>console.log(name)}>
       <Text style={{color:"white",textAlign:"center"} }>onPress</Text>

     </TouchableOpacity>
     </View>
 
     
     {/* <View style={styles.header}>
       <Text>Header</Text>
     </View>
     <View style={styles.body}>
       <Text>Body</Text>
     </View>
     <View style={styles.foot}>
       <Text>Footer</Text>
     </View>
     <View style={styles.header}>
       <Text>Header</Text>
     </View>
     <View style={styles.body}>
       <Text>Body</Text>
     </View>
     <View style={styles.foot}>
       <Text>Footer</Text>
     </View> */}
   </View>
  )
}

const styles = StyleSheet.create({
 main:{
   flex:1,
   flexDirection:"row",
   flexWrap:"wrap",
   justifyContent:"center"
 },
 header:{
   
   backgroundColor:"red",
   height:100,
   width:100
 },
 body:{
 
  backgroundColor:"green",
  height:100,
  width:100
 },
 foot:{
 
  backgroundColor:"yellow",
  height:100,
  width:100
 }


})