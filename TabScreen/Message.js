import { View, Text, FlatList, RefreshControl, TextInput } from 'react-native'
import React, { useState } from 'react'
import ListMessage from '../components/ListMessage'
import FlatButton from '../components/FlatButton'
import Icons from '../components/Icons'
import { StackActions } from '@react-navigation/native'

const Message = (props) => {
  const [isLoading,setIsLoading] = useState(false)
  const handleLoading = ()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  }
  const data=[{
    id:1,
    name:'Tim Cook',
    username:'@timcook',
    picture:'https://img.inews.co.id/media/822/files/inews_new/2022/03/04/CEO_Apple_Tim_Cook.jpg',
    tweet:`Apple today \nApple Tomorrow \nThe best security from iOS brings developer to the edge of the challenges`,
    date:'02/01/2023',
    images:'https://cdnwpseller.gramedia.net/wp-content/uploads/2022/11/macbook-air-m2.jpg'
  },
  {
    id:2,
    name:'Mark Zuckeberg',
    username:'@markz',
    picture:'https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg',
    tweet:`its now or never`,
    date:'02/01/2023',
    images:''
  },
  {
    id:3,
    name:'Elon Musk',
    username:'@elonmusk',
    picture:'https://assets.entrepreneur.com/content/3x2/2000/1654019739-elon-musk.jpg?auto=webp&quality=95&crop=16:9&width=675',
    tweet:`Space X is everything`,
    date:'02/01/2023',
    images:'https://akcdn.detik.net.id/visual/2018/02/07/d6b16a19-f4c9-4765-8fab-273dfeb8adfc_169.jpeg?w=650'
  },]
  return (
    <View className="w-full h-[85vh] relative bg-white">
      <View className="w-full flex-row justify-center py-2 px-4 border-b-[0.5px] border-gray-200">
        <View className="w-full rounded-full flex-row justify-center items-center bg-slate-200 h-8 space-x-1">
          <Icons name={'search_input'} />
          <TextInput value='' placeholder="Search Twitter" className="m-0 p-0" onFocus={()=>props.navigation.dispatch(StackActions.push('searchStack',{id:'message'}))} />
        </View>
      </View>
      <FlatList data={data} refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleLoading}/>} renderItem={ListMessage} keyExtractor={item=>item.id} className="w-full bg-white" />
      <FlatButton {...props}/>
    </View>
  )
}

export default Message