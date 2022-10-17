import { StatusBar } from 'expo-status-bar';
import {  Image,StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text style={{color:'red' , fontSize: 12}}>to share a photo with your friends , just press the button below!</Text>*/}
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
<Text style={styles.instructions}>
  To share a photo from your phone with a friend just presss the button below! 
</Text>
{/*<TouchableOpacity
  onPress={()=> alert("hello , world!")}
  style=
  {{backgrounColor:'blue'}}>
    <Text style={{fontSize:20, color:'#fff'}}>Pick a photo</Text>
  </TouchableOpacity>*/}
     <StatusBar style="auto" />
     <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
</TouchableOpacity>

   </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:305,
    height:159,
    marginBottom: 20,


  },
  instructions:{
    color:'#888',
    fontSize:18,
    marginHorizontal:15,
    marginBottom: 10
  },
  button:{
    borderRadius: 20,
    backgroundColor: 'red',
    padding: 20,
    boxShadow: 10,


  },
  buttonText:{
    color: 'white',
    fontFaily: 'sanSerif',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
