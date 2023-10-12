import { View,TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import Icons from '../components/Icons'
import { useNavigation } from '@react-navigation/native'

const SearchComponent = () => {
    const navigation = useNavigation()
    const id= navigation.getState().routes[1]["params"]["id"]
    console.log(id)
    const [query,setQuery] = useState('')
  return (
    <View className="w-full h-screen bg-white py-2 px-5 flex-col ">
        <View className="w-full h-8 items-center flex-row justify-between">
            <View className="w-72 rounded-full flex-row justify-start items-center bg-slate-200 h-8 space-x-1 px-4">
                <Icons name={'search_input'} />
                <TextInput value={query} onChange={setQuery} placeholder="Search Twitter" className="m-0 p-0 w-full" focusable />
            </View>
            <TouchableOpacity className="w-auto" onPress={()=>navigation.goBack()}>
                <Text className="text-mainBlack">Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SearchComponent