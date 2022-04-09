import {View,Text} from 'react-native'
import Firebase from "../Config/Firebase"; 
import {useState,useEffect} from 'react'

function Profile(props){
    console.log(props)
    const [data,setData] = useState([])


    useEffect(()=>{
        Firebase.database().ref("user").child(props.uid).once("value")
        .then((userdata)=>{
            console.log(userdata.val())
            setData(userdata.val())
        })
        console.log(data)
        
    },[])
    return(
        <View style={{marginLeft:20, padding:10}}>
            <Text style={{fontWeight:'bolder'}}>Profile Information</Text>
            <Text style={{fontWeight:'bolder'}}>Name:</Text>
            <Text style={{fontWeight:'lighter'}}>{data.name}</Text>

            <Text style={{fontWeight:'bolder'}}>Blood Group:</Text>
            <Text style={{fontWeight:'lighter'}}>{data.Blood_group}</Text>

            <Text style={{fontWeight:'bolder'}}>Email:</Text>
            <Text style={{fontWeight:'lighter'}}>{data.email}</Text>
            <Text style={{fontWeight:'bolder'}}>Location:</Text>
            <Text style={{fontWeight:'lighter'}}>{data.location}</Text>


            </View>
    )
}

export default Profile