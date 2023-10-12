import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons'

const Feeds = ({item}) => {
  return (
    <View className="flex-col w-full h-auto py-2 px-5 bg-white border-b-[0.6px] border-gray-100">
      <TouchableOpacity className="flex-row justify-between space-x-2">
        {/* image profile */}
        <Image source={{uri:item.picture}} className="w-10 h-10 rounded-full" />
        {/* name, username and feed */}
        <View className="flex-col w-[80vw] justify-start">
            {/* name, username */}
            <View className="flex-row space-x-1">
                <Text className="text-mainBlack font-semibold">{item.name}</Text>
                <Text numberOfLines={1}>{item.username}</Text>
            </View>
            {/* tweet */}
            <Text className="text-mainBlack font-normal text-xs">{item.tweet}</Text>
            {item.images&&<View className="mt-1 w-[80vw] h-80 border-[0.7px] border-gray-200 rounded-lg"><Image source={{uri:item.images}} resizeMode={'contain'}  className="w-full h-full rounded-lg" /></View>}
            {/* media */}
            <View className="flex-row space-x-4 mt-2 w-full">
                <TouchableOpacity className="space-x-1 flex-row">
                    <Icons name={'comments'} />
                    <Text className="text-[10px] text-mainGrey">9k</Text>
                </TouchableOpacity>
                <TouchableOpacity className="space-x-1 flex-row">
                    <Icons name={'retweet'} />
                    <Text className="text-[10px] text-mainGrey">22k</Text>
                </TouchableOpacity>
                <TouchableOpacity className="space-x-1 flex-row">
                    <Icons name={'heart'} />
                    <Text className="text-[10px] text-mainGrey">100k</Text>
                </TouchableOpacity>
                <TouchableOpacity className="space-x-1 flex-row ">
                    <Icons name={'share'}  />
                </TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Feeds