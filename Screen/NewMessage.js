import { View, Text } from 'react-native'
import React, { useState } from 'react'
// import SearchComponent from './SearchComponent'

const NewMessage = ({navigation}) => {
    console.log(navigation)
    const [to,setTo] = useState('')
  return (
    <View className="px-4 pt-2 w-full h-full bg-white">
        <View className="flex-row justify-between space-x-2">
            <Text>To</Text>
            {/* <SearchComponent/> */}
        </View>
    </View>
  )
}

export default NewMessage