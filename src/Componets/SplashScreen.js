import {View,Text} from 'react-native'
import { useEffect } from 'react'

function Splash({navigation}){
useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate("Home App")
    },1000)
},[])
    return(
        <View>
            <Text>get Blood</Text>
        </View>
    )
}

export default Splash