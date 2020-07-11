import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Bootscreen from './Bootscreen';
import Home from './Home';
import Login from './Login';
import Menudrawer from './Menudrawer';
const AppStack=createStackNavigator({
    Bootscreen:{
        screen:Bootscreen,
        navigationOptions:{
            headerShown:false
        }
    },
    
    
})
const Navigation=createSwitchNavigator({
    AppStack:{screen:AppStack},
    Login:{screen:Login},
    Menudrawer:{
        screen:Menudrawer,
        navigationOptions:{
            headerShown:false
        }
    },
})
export default createAppContainer(Navigation);