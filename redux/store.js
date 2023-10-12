import {configureStore} from '@reduxjs/toolkit'
import feedsSlice from './reducer/feeds'
export default configureStore({
    reducer:{
        feeds: feedsSlice
    }
})