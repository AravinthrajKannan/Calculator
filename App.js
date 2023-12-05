import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Touchable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  const[input,setInput]=useState('');
  const[result,setResult]=useState('');
  const hanleButtonPress=(value)=>{
    if(value=='='){
      try{
        setResult(eval(input).toString());
      }catch(error){
        setResult('Error');
      }
    }else if(value ==='AC'){
      setInput('');
      setResult('');
    }else{
      setInput((prevInput)=>prevInput+value);
    }
  };

  const buttons=[
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['AC'],
  ];
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
       <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
       </View>
       <View style={styles.buttons}>
        {buttons.map((row,rowIndex)=>(
          <View key={rowIndex} style={styles.row}>
            {row.map((button)=>(
              <TouchableOpacity
                key={button}
                style={styles.button}
                onPress={()=>hanleButtonPress(button)}>
                  <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
            ))}
          </View>
        ))}
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:'black',
  },
  display:{
    paddingTop:20,
    borderRadius:10,
    marginHorizontal:10,
    backgroundColor:'#f0f0f0',
    alignItems:'flex-end',
  },
  input:{
    fontSize:24,
  },
  result:{
    fontSize:32,
    marginTop:10,
    color:'green',
  },
  buttons:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%'
  },
  button:{
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    borderRadius:5,
    backgroundColor:'lightgray',
  },
  buttonText:{
    fontSize:24,
  }

});
