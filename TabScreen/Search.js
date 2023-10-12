import { View, Text, } from 'react-native'
import React from 'react'
import FlatButton from '../components/FlatButton'

const Search = (props) => {
  return (
    <View className="bg-white flex-col w-full h-[85vh] py-2 px-5 relative">
      <Text className="text-lg text-mainBlack font-semibold">Trends for you</Text>
      <View className="w-full h-full bg-white flex-col mt-4">
          <Text className="text-xs text-mainGrey font-semibold">Texhnoogy</Text>
          <Text className="text-sm font-semibold text-mainBlack">GitHub</Text>
          <Text className="text-xs text-mainGrey">20.5k Tweets</Text>
      </View>
      <FlatButton {...props} />
    </View>
  )
}

export default Search