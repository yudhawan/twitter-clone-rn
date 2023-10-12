import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNav from './TabNav';
import { Image, TouchableOpacity, View } from 'react-native';
import LogoMain from '../icons/main.png'
import Header from '../components/Header';
import DrawerContent from '../components/DrawerContent';
const Drawer = createDrawerNavigator();
const DrawerNav = ({navigation}) => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent} >
      <Drawer.Screen name='tabMenu' component={TabNav} options={{
        headerShown:false,
        drawerActiveBackgroundColor:'white',
        drawerItemStyle: { display: 'none' }
        }} />
    </Drawer.Navigator>
  )
}

export default DrawerNav