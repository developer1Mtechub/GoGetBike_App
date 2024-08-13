import React from "react"
import { StyleSheet } from "react-native"
import { fonts } from "../utils/fonts"
export const globalStyel = StyleSheet.create({
    globalcontainer: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor:'#fff',
        justifyContent: 'center'
    },
    mainCOntainer:{flex:1,backgroundColor:"#fff"},
    tabsContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    tabsinnerContainer:{
       padding:12
    },
    globalTxt:{
        fontSize:15,
        color:'#000',
        fontFamily:fonts.GOTHAM_BOLD
    },
    contentContainer: {
        flex: 1,
        paddingTop: 15,
    },
    searchbutton: {
        position: 'absolute',
        bottom: 0,
        width: '50%',
        alignSelf: 'center',
        paddingBottom: 20
      },
      bikescontainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",

    },
    biikeTitleStyle: {
        fontSize: 14
    },
    iconStyle: {
        height: 25,
        width: 25
    },
    elevation: {
        elevation: 5, // Android
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 2 }, // iOS
        shadowOpacity: 0.25, // iOS
        shadowRadius: 3.84, // iOS
    }
})