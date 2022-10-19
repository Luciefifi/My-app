import React from "react";
import {View , Text , ScrollView , Image , TextInput, AppRegistry} from "react-native";
const app = () => {
  return(
    <ScrollView>
      <Text  style = {{ margin: 20}}>My first react-native application</Text>
      <View>
        <Text  style = {{ margin: 20}}> these are some more text</Text>
        <Image source = {{
          uri:"/assets/two-girls.jpg",
         
        }}
        style = {{ width: 200  , height: 200}}
        />
        <TextInput
       style = {{
        
          height: 40,
          borderColor: 'pink',
          padding: 10,
          borderWidth: 1,
        }}
        defoultValue = "plase type any value in me"
     
        
        
        />
      </View>
    </ScrollView>

  );
}
export default app;