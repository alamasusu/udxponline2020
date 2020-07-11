import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import ContentComponent from './ContentComponent';
import Home from './Home';
import Category from './Category';
import Library from './Library';
import Download from './Download';
const Menudrawer=createDrawerNavigator({
    'Home':{screen:Home},
    'Category':{screen:Category},
    'Library':{screen:Library},
    'Download':{screen:Download}
},{
    contentComponent:ContentComponent,
    contentOptions:{
        activeTintColor:'white',
        labelStyle: {
            color: 'white',
        },
    },
});
export default createAppContainer(Menudrawer);
