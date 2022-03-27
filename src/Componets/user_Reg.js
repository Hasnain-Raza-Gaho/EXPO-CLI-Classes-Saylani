import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Firebase from "../Config/Firebase";

export default function App({navigation}) {
 const [signUp , setSignUp] = useState(true)

 const [name,setname] =useState()
 const [username,setusername] =useState()
 const [email,setemail] =useState()
 const [password,setpassword] =useState()

 const [email2,setemail2] =useState()
 const [password2,setpassword2] =useState()

 const login=()=>{

  Firebase.auth().signInWithEmailAndPassword(email2, password2)
  .then((data)=>{
      console.log(data.user.uid)
      // console.log(props.navigation)
      navigation.navigate("User Profile",{Uid: data.user.uid})

  })
  .catch((data)=>{
      console.log(data)
  })
 }


const useradd=()=>{
  console.log(name)
  Firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((data) => {
    console.log(data.user.uid)
  //   var key = Firebase.database().ref("user").push().key;
  //   console.log(key)
   var obj = {
     name:name,
     email:email,
     password:password,
     uid : data.user.uid
   }
   Firebase.database().ref("user").child(data.user.uid).set(obj)
   setSignUp(false)

  })
  .catch((e)=>{
    console.log(e)
  })

}
 
  return (
    <>
    {
      signUp &&
      
      <View style={styles.main}>
        <View style={styles.signinform}>
          <View>
            <Text style={styles.signupText}>Create an Account</Text>
          </View>
          <View styles={styles.forminner}>
            <TextInput style={styles.textfield} placeholder="Full Name"
             value={name} 
            onChangeText={(e)=>setname(e)}
            />
            <TextInput style={styles.textfield} placeholder="@username" 
              value={username} 
              onChangeText={(e)=>setusername(e)}
            />
            <TextInput style={styles.textfield} placeholder="Email"
              value={email} 
              onChangeText={(e)=>setemail(e)}
            />
            <TextInput
              style={styles.textfield}
              placeholder="Password"
              secureTextEntry={true} //for password
              value={password} 
              onChangeText={(e)=>setpassword(e)}

            />
            <View style={styles.button}>
              <Button title="SignUp" style={styles.btn} onPress={()=>useradd()}></Button>
            </View>
            <View style={styles.signin}>
             <Text><TouchableOpacity style={styles.signintext} onPress={()=>setSignUp(false)} >SignIn</TouchableOpacity >, if you have an account!</Text>
            </View>
          </View>
        </View>
      </View>
    }
    {
      !signUp &&

      <View style={styles.main}>
        <View style={styles.signinform}>
          <View>
            <Text style={styles.signupText}>Login to your account</Text>
          </View>
          <View styles={styles.forminner}>
           
            <TextInput style={styles.textfield} placeholder="Email" 
            value={email2}
            onChangeText={(e)=>setemail2(e)}
            />
            <TextInput
              style={styles.textfield}
              placeholder="Password"
              secureTextEntry={true}
              value={password2}
              onChangeText={(e)=>setpassword2(e)}
            />
            <View style={styles.button}>
              <Button title="LOGIN" style={styles.btn} onPress={()=>login()}></Button>
            </View>
            <View style={styles.signin}>
             <Text><TouchableOpacity style={styles.signintext} onPress={()=>setSignUp(true)}  >SignUp</TouchableOpacity >, if you want to Create an account!</Text>
            </View>
          </View>
        </View>
      </View>
    }
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2af",
    height: 100 + "vh",
  },
  signupText: {
    fontSize: 30,
    color: "white",
    margin: "auto",
    textalign: "center",
    fontWeight: "bolder",
    marginBottom: 10,
  },
  textfield: {
    outline: "none",
    border: "1px solid grey",
    margin: 3,
    backgroundColor: "white",
    padding: 10,
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 5,
  },

  textfield: {
    outline: "none",
    border: "1px solid grey",
    margin: 3,
    backgroundColor: "white",
    padding: 10,
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 5,
  },
  signinform: {
    width: 80 + "%",
  },
  button: {
    marginTop: 10,
    width: 70 + "%",
    margin: "auto",
  },
  signintext: {
    color:'white',
    backgroundColor: 'red',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
});