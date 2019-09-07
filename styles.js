import {StyleSheet,Platform} from 'react-native'

export default StyleSheet.create({
        mainView:{
          height:100,
          width:"100%",
          backgroundColor: "blue",
          marginTop:Platform.OS === "android" ? 24 : null
        }
})