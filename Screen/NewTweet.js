import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
import Icons from '../components/Icons';

const NewTweet = ({navigation}) => {
    const [tweet,setTweet] = useState('')
    const [filePath, setFilePath] = useState([])
    const chooseFile = ()=>{
        let options = {
            customButtons: [
              {
                name: 'customOptionKey',
                title: 'Choose Photo from Custom Option'
              },
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        }
        launchImageLibrary({}, (response) => {    
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log(
                'User tapped custom button: ',
                response.customButton
              );
              alert(response.customButton);
            } else {
                let source = { uri: response?.assets[0]?.uri }
              setFilePath(prev=>[...prev,source]);
            }
          });
    }
    useEffect(()=>{
    },[])
  return (
    <View className="px-4 py-2">
        {/* header */}
        <View className="flex-row justify-between">
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text className="text-mainBlack">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-1 px-4 bg-mainBlue rounded-full" disabled={!tweet} onPress={()=>console.log('submit')}>
                <Text className="text-white">Tweet</Text>
            </TouchableOpacity>
        </View>
        {/* body */}
        <View className="flex-row justify-between mt-1 w-full relative">
            <Image source={{uri:"https://assets.entrepreneur.com/content/3x2/2000/1654019739-elon-musk.jpg?auto=webp&quality=95&crop=16:9&width=675"}} className="w-7 h-7 rounded-full"  />
            <View className="w-80 h-[50vh] ml-1 justify-between">
                <ScrollView className="w-full h-full pb-20">
                    <TextInput 
                        className="w-full h-auto" 
                        placeholder="What's happning?"
                        multiline={true}
                        autoFocus={true}
                        focusable
                        value={tweet}
                        onChange={setTweet} />
                </ScrollView>
                <ScrollView horizontal={true} className="flex-row w-full h-28 space-x-2">
                    <TouchableOpacity onPress={chooseFile} className="w-20 h-20 border border-mainBlue rounded-2xl flex-row justify-center items-center">
                        <Icons name={'camera'} />
                    </TouchableOpacity>
                    {filePath.length&&filePath.map(img=><Image key={img.uri} source={{uri:img.uri}} className="w-20 h-20 rounded-2xl"/>)}

                </ScrollView>
            </View>
        </View>
    </View>
  )
}

export default NewTweet