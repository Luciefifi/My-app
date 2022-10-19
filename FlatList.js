import React from "react";
import {FlatList , View , Text , StyleSheet} from "react-native";

const FlatListBasic = () => {
    return (

        <View style = {Styles.container}>
            <FlatList
            data = {[
                {key : 'Lucie'},
                {key : 'Lavender'},
                {key : 'Acushla'},
                {Key : 'Fides'},
                {key : 'Lucie'},
                {key : 'Lavender'},
                {key : 'Acushla'},
                {Key : 'Fides'},
                {key : 'Lucie'},
                {key : 'Lavender'},
                {key : 'Acushla'},
                {Key : 'Fides'},
                {key : 'Lucie'},
                {key : 'Lavender'},
                {key : 'Acushla'},
                {Key : 'Fides'},
               
            ]}
            renderItem = {({item}) => <Text style = {styles.item}>{item.key}
            </Text>}
           />
     
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: 22
           },
           item: {
             padding: 10,
             fontSize: 18,
             height: 44,
           },
    }
); 
export default FlatListBasic;
