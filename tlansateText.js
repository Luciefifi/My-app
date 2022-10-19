import  React , {useState} from "react";
import{ View , Text , TextInput} from "react-native";

const TextTlanslator = () => {
    const [Text , setText] = useState("");

    return(
        <view>
            <TextInput
            style={{height:40}}
            placeholder = "type here to tlanslate!"
            onChangeText={ newText => setText(newText) }
            defaultValue = {text}
            />

            <Text style = {{padding : 10 , fontSize : 42}}>
                {text.split(''.map((word) => word &&  '@@').join(''))}
            </Text>

        </view>
    );

}
export default  TextTlanslator;
