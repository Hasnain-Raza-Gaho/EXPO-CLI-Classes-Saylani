import {View,Text, TouchableOpacity} from 'react-native'
import { useEffect,useState } from 'react'
import Firebase from '../Config/Firebase'
import {Linking} from 'react-native'




function About(props){
    console.log(props.uid)

    var [user,setuser] = useState([])

    useEffect(()=>{
        //get user type
        Firebase.database().ref("user").child(props.uid).once("value")
        .then((data)=>{
            var userdata = data.val()
            if(userdata.userType=="Get"){//get 
                console.log("show d")

                //get all data 
                Firebase.database().ref("user").once("value")

                .then((data)=>{
                    var getuser = data.val()
                   var b = Object.values(getuser)//get values and save in index vice
                   console.log(b.length)
                  var dondata=[]
                   for(var i=0;i<b.length;i++){
                       if(b[i].userType=="Donation"){
                           console.log(b[i])
                           dondata.push(b[i])
                        //    setuser(b[i])
                       }
                   }
                   console.log(dondata)
                   setuser(dondata)

                    
                 
                })
            }
            else if(userdata.userType=="Donation"){
                Firebase.database().ref("user").once("value")
                .then((data)=>{
                    var getuser = data.val()
                   var b = Object.values(getuser)
                   console.log(b.length)
                  var dondata=[]
                   for(var i=0;i<b.length;i++){
                       if(b[i].userType=="Get"){
                           console.log(b[i])
                           dondata.push(b[i])
                        //    setuser(b[i])
                       }
                   }
                   console.log(dondata)
                   setuser(dondata)

                    
                 
                })

            }
            else{
                console.log("get")
            }

        })

    },[])
    return(
        <View>
            <Text>About</Text>
            {user.map((v,i)=>{
                console.log(v)
                return(
                    <View key={i} style={{borderWidth:2,borderColor:"yellow",borderStyle:"solid"}}>
                       <Text>{v.name}</Text>
                       <Text>{v.email}</Text> 
                      
                           <TouchableOpacity onPress={()=>Linking.openURL(`tel:${v.contact}`)}>
                           <Text> {v.contact}</Text> 
                           </TouchableOpacity>
                       <Text>{v.Blood_group}</Text> 
                       <Text>{v.location}</Text> 
                     

                        </View>
                )
            })}
            </View>
    )
}

export default About