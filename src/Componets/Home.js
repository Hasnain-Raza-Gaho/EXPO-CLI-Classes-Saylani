import { View ,Text} from "react-native"
import {useEffect,useState} from "react"
import Firebase from "../Config/Firebase"; 
// import { useState } from "react/cjs/react.production.min";

const Home = ({route,navigation})=>{
    const {Uid} = route.params
    console.log(Uid)

    const [data,setdata] = useState()

    

    useEffect(()=>{
        Firebase.database().ref("user").child(Uid).once("value")
        .then((userdata)=>{
            console.log(userdata.val())
            setdata(userdata.val().name)
        })

    },[])
    // console.log(props.route.params. Uid)
    return(
        <View>
            <Text>
                STACK NAVIGATION {data}
            </Text>
        </View>
    )
}

export default Home;