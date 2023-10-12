import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ListMessage = ({item}) => {
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
                <Text numberOfLines={1}>{item.date}</Text>
            </View>
            {/* message */}
            <Text numberOfLines={1} className="text-mainBlack font-normal text-xs">{item.tweet}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ListMessage