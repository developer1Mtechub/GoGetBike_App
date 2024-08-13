import React from 'react'
import { Dimensions, Image } from 'react-native'
import { images } from './constants'
export const onboardingArray = [
    {
        backgroundColor: '#fff',
        image: <Image source={images.slide1} style={{
            height: 450,
            alignSelf: 'flex-start',
            width: 680, resizeMode: 'contain'
        }} />,
        title: 'Welcome to RideEasy',
        subtitle: 'Discover the easiest way to rent a bike and explore the city on your terms.',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={images.bikeb} style={{
            height: 480,
            alignSelf: "flex-end",
            // left: '6%',
            width: 600,
            resizeMode: 'contain'
        }} />,
        title: 'Find Your Perfect Ride',
        subtitle: 'Choose from a variety of bikes, from standard to premium, and start your adventure.',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={images.bikef} style={{
            alignSelf: "flex-end",
            right: "21%",
            height: 480,
            width: 620,
            resizeMode: 'contain'
        }} />,
        title: 'Ride with Confidence',
        subtitle: 'Enjoy a seamless ride experience with real-time support and easy ride management.',
    },
]

export const searchRideArraEconomy = [
    {
        id: 1,
        title: 'Location'
    },
    {
        id: 2,
        title: 'Search Bike Modal'
    },
    {
        id: 3,
        title: 'Start Date & time'
    },
    {
        id: 4,
        title: 'End Date & time'
    },
]
export const searchRideArraPremium = [
    {
        id: 1,
        title: 'Location'
    },
    {
        id: 2,
        title: 'Search Bike Modal'
    },
    {
        id: 3,
        title: 'Pick Date'
    },
    {
        id: 4,
        title: 'Start Time'
    },
    {
        id: 5,
        title: 'End Time'
    },
]
export const bikesModelArray = [
    {
        id: 1,
        title: 'Bike Model1',
        des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
    },
    {
        id: 2,
        title: 'Bike Model1',
        des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
    },
    {
        id: 3,
        title: 'Bike Model1',
        des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
    },
    {
        id: 4,
        title: 'Bike Model1',
        des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
    },
    {
        id: 5,
        title: 'Bike Model1',
        des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
    },
    {
        id: 6,
        title: 'Bike Model1',
        des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
    },
]
export const profileData = [
    {
        id: 1,
        title: 'Edit Profile',
        icon:images.edit

    },
    {
        id: 2,
        title: 'Manage Addresses',
        icon:images.address

    },
    {
        id: 3,
        title: 'Chat with admin',
        icon:images.chat
    },
    {
        id: 4,
        title: 'Manage Cards',
        icon:images.card
    },
    {
        id: 5,
        title: 'Log Out',
        icon:images.logout
    },


]