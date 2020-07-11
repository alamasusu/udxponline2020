import React, { Component } from 'react';
import { StyleSheet, View, Animated, Image, Easing,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import * as actionLogin from '../actions/actionLogin';
class Bootscreen extends Component {
      static navigationOptions={
          headerShown:false
      }
      constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
      }
      componentDidUpdate(prevProps){
        if(this.props.tokensuccess!==prevProps.tokensuccess){
          this.props.navigation.navigate('Home');
        }
      }
      componentDidMount() {
        this.StartImageRotateFunction();
        this.checkToken()
      }
      StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            this.StartImageRotateFunction();
        });
      }
      checkToken=async()=>{
          try {
              const token=await AsyncStorage.getItem('token');
              if(token!=null){
                  this.props.checktoken(token);
              }else {
                  this.props.navigation.navigate('Login');
              }
          } catch (e) {
              console.log("loi o checkToken BootScreen!");
          }
      }
    render() {
      const RotateData = this.RotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });
      return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Animated.Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                transform: [{ rotate: RotateData }],
              }}
              source={require('../imgs/react_logo.png')}
            />
        </View>
      );
    }
}
function mapStateToProps(state){
    return{
      tokensuccess:state.login.tokensuccess
    }
}
export default connect(mapStateToProps,actionLogin)(Bootscreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20232a',
  },
});
