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

export default function App() {
  let [name, setname] = useState();

  return (
    <View style={styles.main}>
      <View style={styles.part1}>
        <Text>Hello</Text>
      </View>
      <View style={styles.part2}>
        <Text>Hello</Text>
      </View>
      <View style={styles.part3}>

        <View style={styles.square}>
        <Text>Hello</Text>
        </View>
        <View style={styles.square}>
        <Text>Hello</Text>
        </View>
        <View style={styles.square}>
        <Text>Hello</Text>
        </View>
      </View>
      <View style={styles.part4}>
        <Text>Hello</Text>
      </View>
      <View style={styles.part5}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
  justifyContent: 'center',
  }
  ,
  part1: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    flexWrap: "wrap",
    justifyContent: "center",
    aligItems: "center",
  },
  part2: {
    flex: 2,
    backgroundColor: "yellow",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  part3: {
    flex: 1,
    backgroundColor: "grey",

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  part4: {
    flex: 1,
    backgroundColor: "green",

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  part5: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "cyan",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  square:{
    backgroundColor:'red',
    marginTop: 50,
    marginBottom: 50,
    margin: 10,
    flex:3
  }
  
});
