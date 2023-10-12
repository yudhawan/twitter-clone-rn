import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../TabScreen/Home';
import Search from '../TabScreen/Search';
import Notification from '../TabScreen/Notification';
import Message from '../TabScreen/Message';
import Header from "../components/Header";
import Icons from "../components/Icons";
const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'home') {
                iconName = focused? 'home_solid':'home'
            } else if (route.name === 'search') {
                iconName = focused ? 'search_solid' :'search'
            } else if (route.name==='notification'){
                iconName=focused?'notif_solid':'notif'
            } else if(route.name==='message'){
                iconName=focused?'message_solid':'message'
            }

            // You can return any component that you like here!
            return <Icons name={iconName} />;
            },
            tabBarShowLabel:false,
            header:(prop)=><Header {...prop}/>
        })}
    >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name='search' component={Search} />
        <Tab.Screen name='notification' component={Notification} />
        <Tab.Screen name='message' component={Message} />
    </Tab.Navigator>
  )
}

export default TabNav