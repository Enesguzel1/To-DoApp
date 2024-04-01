import React from "react";
import{View,Text,StyleSheet} from "react-native"

export default class ItemList extends React.Component{
    render(){
        const {name} = this.props;
        return(
            <View style={[style.row,{flexDirection:'row'}]} >
                <Text style={style.text}>{name}</Text>
                <Text style={[style.text,{textAlign:'right'}]}>X</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    row:{backgroundColor:'#cccc',borderRadius:5,padding:2,margin:5},
    text:{color:'black',fontWeight:'500',fontSize:18,fontStyle:'italic',flex:1}
});