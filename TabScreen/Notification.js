import React, { useState } from 'react'
import Notifications from '../components/Notifications'
import { FlatList, RefreshControl, View } from 'react-native'
import FlatButton from '../components/FlatButton'

const Notification = (props) => {
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
      <FlatList data={data} refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleLoading}/>} renderItem={Notifications} keyExtractor={item=>item.id} className="w-full bg-white" />
      <FlatButton {...props} />
    </View>
  )
}

export default Notification