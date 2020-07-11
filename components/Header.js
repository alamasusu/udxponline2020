import React, { Component } from 'react';
import { TouchableOpacity, View,StatusBar ,StyleSheet,Image, Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container} >
                <StatusBar hidden={true}/>
                <View style={styles.bars}>
                    <TouchableOpacity style={styles.btn_menu} onPress={()=>this.props.navigation.openDrawer()}>
                        <FontAwesome5 style={styles.icon_menu} name="bars"/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.logo}>
                    <Image source={require('../imgs/logo.png')} style={styles.img_logo}/>
                </View>
                <View style={styles.search}>
                    <TouchableOpacity>
                        <FontAwesome5 style={styles.icon_search} name="search" onPress={()=>this.onNaviSearch()}/>
                    </TouchableOpacity>
                </View>
                
            </View>

        )
    }
    onNaviSearch(){
        // this.props.navigation.navigate("Search");
    }
}
const {width,height}=Dimensions.get("window");
const styles=StyleSheet.create({
    container:{
        height:height/18,
        width:width,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:"center",
        backgroundColor:"black",
    },
    btn_menu:{
      marginLeft:10
    },
    icon_menu:{
        fontSize:18,
        color:"#E8E8E8"
    },
    img_logo:{
        width:90,
        height:20,
        resizeMode:"contain",
    },
    icon_search:{
        fontSize:18,
        color:"#E8E8E8",
        marginRight:10
    },
    bars:{
        width:width/3,
    },
    logo:{
        width:width/3,
        justifyContent:"center",
        alignItems:"center",
    },
    search:{
        width:width/3,
        alignItems:"flex-end",
    }
})
