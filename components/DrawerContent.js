import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import {DrawerContentScrollView} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from './Icons';

const DrawerContent = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <DrawerContentScrollView {...props} >
          <View className="w-full h-screen px-6 py-2 flex-col">
              <TouchableOpacity>
                <Image source={{uri:"https://assets.entrepreneur.com/content/3x2/2000/1654019739-elon-musk.jpg?auto=webp&quality=95&crop=16:9&width=675"}} className="w-7 h-7 rounded-full"/>
              </TouchableOpacity>
              <Text className="text-mainBlack text-[19px] font-bold mt-2">Elon Musk</Text>
              <TouchableOpacity>
                <Text className="text-mainGrey text-[16px] font-normal">@elonmusk</Text>
              </TouchableOpacity>
              <View className="mt-4 flex flex-row w-full space-x-4">
                <TouchableOpacity className="flex flex-row space-x-1">
                  <Text className="text-mainBlack">4k</Text>
                  <Text className="text-mainGrey">Following</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row space-x-1">
                  <Text className="text-mainBlack">60</Text>
                  <Text className="text-mainGrey">Followers</Text>
                </TouchableOpacity>
              </View>
              <View className="mt-6 flex-col space-y-4 border-gray-300 border-b pb-6">
                <TouchableOpacity className="flex-row space-x-4">
                  <Icons name={'profile'} className="" />
                  <Text className="text-mainBlack font-normal capitalize">profile</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row space-x-4">
                  <Icons name={'lists'} className="" />
                  <Text className="text-mainBlack font-normal capitalize">lists</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row space-x-4">
                  <Icons name={'topics'} className="" />
                  <Text className="text-mainBlack font-normal capitalize">topics</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row space-x-4">
                  <Icons name={'bookmarks'} className="" />
                  <Text className="text-mainBlack font-normal capitalize">bookmarks</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row space-x-5">
                  <Icons name={'moments'} className="" />
                  <Text className="text-mainBlack font-normal capitalize">moments</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="mt-10">
                <Text className="font-bold text-mainBlack">Setting and Privacy</Text>
              </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
    </SafeAreaView>
  )
}

export default DrawerContent