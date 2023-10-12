import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons'

const Notifications = ({item}) => {
  return (
      <TouchableOpacity className="w-full h-auto border-b-[0.6px] border-gray-100 flex-row justify-between space-x-2 pl-6 pr-4 py-2">
        {/* image profile */}
        <Image source={{uri:item.picture}} className="w-10 h-10 rounded-full" />
        {/* name, username and feed */}
        <View className="flex-col w-[80vw] justify-start">
            {/* name, username */}
            <View className="flex-row space-x-1">
                <Text className="text-mainBlack font-semibold">{item.name}</Text>
                <Text numberOfLines={1}>{item.username}</Text>
            </View>
            <View className="w-full space-x-2 flex-row">
                <Text className="text-xs font-normal text-mainGrey">Replying to</Text>
                <Text className="text-xs font-normal text-mainBlue">@yudhawan</Text>
            </View>
            {/* tweet */}
            <Text numberOfLines={1} className="text-mainBlack font-normal text-xs">{item.tweet}</Text>
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
  )
}

export default Notifications