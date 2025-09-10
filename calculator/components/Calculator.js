import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import {useState} from "react"
import CalButton from "./CalButton"

export default function Calculator() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    setInput((prev) =>prev +value)
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  }

  const handleEqual = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult.toString());
    } catch(e){
      setResult("Loi")
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      
      <View style={styles.row}>
        <CalButton label="7" onPress={() => handlePress("7")}/>
        <CalButton label="8" onPress={() => handlePress("8")}/>
        <CalButton label="9" onPress={() => handlePress("9")}/>
        <CalButton label="/" onPress={() => handlePress("/")}/>
      </View>
      <View style={styles.row}>
        <CalButton label="4" onPress={() => handlePress("4")}/>
        <CalButton label="5" onPress={() => handlePress("5")}/>
        <CalButton label="6" onPress={() => handlePress("6")}/>
        <CalButton label="*" onPress={() => handlePress("*")}/>
      </View>
      <View style={styles.row}>
        <CalButton label="1" onPress={() => handlePress("1")}/>
        <CalButton label="2" onPress={() => handlePress("2")}/>
        <CalButton label="3" onPress={() => handlePress("3")}/>
        <CalButton label="-" onPress={() => handlePress("-")}/>
      </View>
      <View style={styles.row}>
        <CalButton label="0" onPress={() => handlePress("0")}/>
        <CalButton label="+" onPress={() => handlePress("+")}/>
        <CalButton label="=" onPress={() => handleEqual()}/>
        <CalButton label="C" onPress={() => handleClear()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  row: {
    flexDirection: "row",
    marginVertical: 5
  },
  inputText: {
    color: "green"
  },
  resultText: {
    color: "red"
  },
});
