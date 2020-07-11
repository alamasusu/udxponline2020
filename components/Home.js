import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from './Header';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions={
        drawerIcon:()=>(
            <FontAwesome5 name="home" style={{color:"white",fontSize:20}} />
        ),
    }
    componentDidMount(){
        const {token}=this.props;
        if(token.length>0){
            this.savetoken(token)
        }
    }
    savetoken=async(token)=>{
        try {
            await AsyncStorage.setItem('token', token);
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props}/>
            </View>
        )
    }
}
function mapStateToProp(state){
    return{
        token:state.login.token
    }
}
export default connect(mapStateToProp)(Home);
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#333333'
    }
})
