import React from "react";
import {SectionList , StyleSheet , Text , View} from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingTop : 22,
    },
    SectionHeader: {

        paddingTop :2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,347,1.0)',
    },
    item: {
        padding : 10,
        fontSize: 18,
        height : 44,
    },
})

const SectionListBasic = () =>
{
    return (

        <View style = {styles.container}>
           < SectionList
           sections = {[
            {title: "L" , data : ['Lucie', 'Lavender' , 'Light' , 'Love' , 'Live' , 'Life']},

            {title : "D", data : [ 'Daddy' , 'Done' , 'Dove' , 'Due']},
           ]}
           renderItem = {({item}) => <Text style = {styles.item}> {item}</Text>}
           renderSectionHeader = {([section]) => <Text style = 
        {styles.SectionHeader} >{section.title}</Text>}
        keyExtractor = {(item , inex) => 'basicListEntry-${item.title}'}
           />
           
        </View>
    );
}

export default SectionListBasic;