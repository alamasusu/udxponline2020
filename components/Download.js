import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from './Header';
export default class Download extends Component {
    static navigationOptions={
        drawerIcon:()=>(
            <FontAwesome5 name="download" style={{color:"white",fontSize:20}} />
        ),
    }
    render() {
        
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#333333'
    }
})
