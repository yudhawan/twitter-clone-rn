import { Image } from 'react-native'
import React from 'react'
import add_message from '../icons/add_message.png'
import add_tweet from '../icons/add_tweet.png'
import bookmarks from '../icons/bookmarks.png'
import camera from '../icons/camera.png'
import comments from '../icons/comments.png'
import heart from '../icons/heart.png'
import heart_solid from '../icons/heart_solid.png'
import home_solid from '../icons/home_solid.png'
import home from '../icons/home.png'
import lists from '../icons/lists.png'
import main from '../icons/main.png'
import message_solid from '../icons/message_solid.png'
import message from '../icons/message.png'
import moments from '../icons/moments.png'
import notif_solid from '../icons/notif_solid.png'
import notif from '../icons/notif.png'
import profile from '../icons/profile.png'
import retweet from '../icons/retweet.png'
import search_input from '../icons/search_input.png'
import search_solid from '../icons/search_solid.png'
import search from '../icons/search.png'
import setting from '../icons/setting.png'
import share from '../icons/share.png'
import star from '../icons/star.png'
import star_solid from '../icons/star_solid.png'
import topics from '../icons/topics.png'
import twitter from '../icons/twitter.png'

const icons = {
    add_message:add_message,
    add_tweet:add_tweet,
    bookmarks:bookmarks,
    camera:camera,
    comments:comments,
    heart:heart,
    heart_solid:heart_solid,
    home:home,
    home_solid:home_solid,
    lists:lists,
    main:main,
    message:message,
    message_solid:message_solid,
    moments:moments,
    notif:notif,
    notif_solid:notif_solid,
    profile:profile,
    retweet:retweet,
    search_input:search_input,
    search_solid:search_solid,
    search:search,
    setting:setting,
    share:share,
    star:star,
    star_solid:star_solid,
    topics:topics,
    twitter:twitter
}
const Icons = ({name,className}) => {
  return <Image source={icons[name]} className={className} />
}

export default Icons