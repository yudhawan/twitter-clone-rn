import { TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons'
import { StackActions } from '@react-navigation/native'

const FlatButton = ({navigation}) => {
    const routeName = navigation?.getState().history[1]?.['key']?.split('-')[0]
  return (
    <TouchableOpacity className="w-14 h-14 rounded-full bg-mainBlue flex-row justify-center items-center absolute bottom-4 left-[84vw]" onPress={()=>{
      routeName==='message'?navigation.dispatch(StackActions.push('newMessage'))
      :navigation.dispatch(StackActions.push('newTweet'))
      }} >
      {routeName==='message'?<Icons name={'add_message'} />:<Icons name={'add_tweet'} />}
    </TouchableOpacity>
  )
}

export default FlatButton