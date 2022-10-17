import React from "react";
import {View , Text , ScrollView , Image , TextInput} from "react-native";
const app = () => {
  return(
    <ScrollView>
      <Text>My first react-native application</Text>
      <View>
        <Text> these are some more text</Text>
        <Image source = {{
          uri:"/assets/two-girls.jpg",
         
        }}
        style = {{ width: 200  , height: 200}}
        />
        <TextInput
       style = {{
        style = {{
          height:  40,
          borderColor: 'pink';
          padding: 10,
          borderWidth: 1;
        }}
        defoultValue = "plase type any value in me"
       }}
        
        
        />
      </View>
    </ScrollView>

  );
}