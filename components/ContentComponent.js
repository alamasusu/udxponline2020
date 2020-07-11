import React, { Component } from 'react'
import {Image,Text,View,SafeAreaView,TouchableOpacity,StyleSheet,Alert, Dimensions,BackHandler} from 'react-native'
import {DrawerItems } from 'react-navigation-drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import * as actionLogin from '../actions/actionLogin';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
class ContentComponent extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render() {
        const {name,picture}=this.props.ifuser;
        return (
            <View style={styles.v_container}>
              <StatusBar hidden={true}/>
              <View style={styles.container}>
                <Image style={styles.img_avt} source={{uri:picture}}/>
              <Text style={styles.txt_name}>{name}</Text>
                <TouchableOpacity onPress={()=>this.logout()}>
                    <Text style={styles.txt_logout}>[Đăng xuất]</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.drawer}>
                 <DrawerItems {...this.props}/>
              </View>
              <View style={styles.viewdestroy}>
                  <View style={styles.viewclose}>
                    <FontAwesome5 name="window-close" style={{color:"white",fontSize:20}} />
                    <TouchableOpacity onPress={()=>this.detroy()}>
                      <Text style={styles.textdestroy}>Thoát</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
        )
    }
    logout(){
        Alert.alert(
            'Đăng xuất',
            'Bạn có muốn đăng xuất?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK',
               onPress: () => this.okLogout()
              },
            ],
            {cancelable: false},
          );
    }
    okLogout=async()=>{
        try {
            await AsyncStorage.removeItem("token");
            this.props.navigation.navigate("Login");
        } catch (error) {
            console.log(error);
        }
    }
    detroy(){
      Alert.alert(
        'Cảnh báo!',
        'Bạn có thoát ứng dụng !',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK',
           onPress: () => {BackHandler.exitApp()}
          },
        ],
        {cancelable: false},
      );
    }
}
function mapStatetoProps(state){
    return {ifuser:state.login.ifuser};
}
export default connect(mapStatetoProps,actionLogin)(ContentComponent);
const {width,height}=Dimensions.get('window');
const styles=StyleSheet.create({
    v_container:{
        flex:1,
        backgroundColor:"#000022"
    },
    container:{
      height:height/4,
      backgroundColor:"#FAFAD2",
      alignItems:"center",
      justifyContent:"center",

    },
    img_avt:{
      height:80,
      width:80,
      borderRadius:60
    },
    txt_name:{
      color:"black",
      marginTop:10
    },
    txt_logout:{
      fontSize:10
    },
    drawer:{
      borderBottomWidth:0.5,
      borderColor:"white"
    },
    textdestroy:{
      color:'white',
      fontSize:18,
      marginLeft:20
    },
    viewdestroy:{
      height:height/2.7,
      justifyContent:'flex-end'
    },
    viewclose:{
       flexDirection:'row',
       marginLeft:20
    }
})
