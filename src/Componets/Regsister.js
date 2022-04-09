import React, { useState } from "react";
import { View, Picker, StyleSheet, Text,TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Firebase from "../Config/Firebase";

const App = (props) => {
    console.log(props)
    const [selectedValue, setSelectedValue] = useState("A");
    const [selectedUser, setSelectedUser] = useState("Get");
    const [blood_group,setblood_group] = useState();
    const [location,setlocation] = useState();
    const [contact,setcontact] = useState();

    const [page,setpage] = useState(false)

    const AddUser=()=>{
        console.log(props.uid)
        Firebase.database().ref("user").child(props.uid).once("value")
        .then((data )=>{
            console.log(data.val())
            var obj  = {
                email:data.val().email, 
                name: data.val().name,
                password: data.val().password,
                uid: data.val().uid,
                Blood_group:selectedValue,
                location:  location,
                userType:selectedUser,
                contact:contact

            }

            console.log(obj)
         Firebase.database().ref("user").child(props.uid).set(obj)
         setpage(true)

        //  props.navigation.navigate("Home Page")

        })

        // var obj = {
        //     ""
        // }


    }
 



    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Text>Blood Group</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ marginLeft: 40, height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="O" value="O" />


                </Picker>
            </View>
            <View  style={{ flex: 1, flexDirection: "row",marginTop:30 , marginLeft: 40,}}>
                <Text>Address</Text>
                <TextInput   style={{marginLeft:40,borderWidth:2,borderColor:"red",borderStyle:"solid"}} onChangeText={(e)=>setlocation(e)}/>
            </View>

            <View  style={{ flex: 1, flexDirection: "row",marginTop:30 , marginLeft: 40,}}>
                <Text>Conatct Number </Text>
                <TextInput  keyboardType="numeric"  style={{marginLeft:40,borderWidth:2,borderColor:"red",borderStyle:"solid"}} onChangeText={(e)=>setcontact(e)}/>
            </View>
            <View style={{ flex: 1, flexDirection: "row" ,marginTop:40}}>
                <Text>User Type</Text>
                <Picker
                    selectedValue={selectedUser}
                    style={{ marginLeft: 40, height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedUser(itemValue)}
                >
                    <Picker.Item label="Donation" value="Donation" />
                    <Picker.Item label="Get" value="Get" />
                   


                </Picker>
            </View>
            <View style={{ flex: 1, flexDirection: "row" ,marginTop:40,borderWidth:2,borderColor:"yellow",borderStyle:"solid"}}>
                <TouchableOpacity activeOpacity={0.6} onPress={()=>AddUser()}>
                    <Text>User Regsister</Text>
                </TouchableOpacity>
            </View>
            <View  style={{ flex: 8, flexDirection: "row" }}>
              
              
            </View>

        

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});

export default App;