import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native'
import { DrawerActions, StackActions } from '@react-navigation/native';
import Icons from './Icons'
const Header = ({navigation}) => {
  const routeName = navigation.getState().history[1]?.['key']?.split('-')[0]
  return (
    <View className="w-full h-12 flex flex-row bg-white justify-between items-center px-2">
        <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())} className="w-7 h-7">
            <Image source={{uri:"https://assets.entrepreneur.com/content/3x2/2000/1654019739-elon-musk.jpg?auto=webp&quality=95&crop=16:9&width=675"}} className="w-full h-full rounded-full"  />
        </TouchableOpacity>

        {routeName===undefined&&<Icons name="twitter" className="w-[27px] h-[22px]"/>}

        {routeName==='search'&&<View className="w-60 rounded-full flex-row justify-center items-center bg-slate-200 h-8 space-x-1">
          <Icons name={'search_input'} />
          <TextInput value='' placeholder="Search Twitter" className="m-0 p-0" onFocus={()=>navigation.dispatch(StackActions.push('searchStack',{id:'users'}))} />
        </View>}

        {routeName==='notification'&&<Text className="text-sm text-mainBlack font-semibold">Notification</Text>}

        {routeName==='message'&&<Text className="text-sm text-mainBlack font-semibold">Message</Text>}

        {(routeName==='search' || routeName==='notification' || routeName==='message')?<TouchableOpacity>
          <Icons name="setting" />
          </TouchableOpacity>:<Icons name="star"/>}

    </View>
  )
}

export default Header