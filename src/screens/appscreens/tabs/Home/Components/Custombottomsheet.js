
import React, { forwardRef } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import Commontitle from '../../../../../components/Commontitle';
import IconCom from '../../../../../components/IconCom';

const CustomBottomSheet = forwardRef((props, ref) => {

   
    return (
        <View style={{flex:1}}>
            <RBSheet
                ref={ref}
                closeOnDragDown={true}
                onClose={() => { props.handlClose && props.handlClose() }}
                closeOnPressMask={true}
                closeOnPressBack={() => { props.closeOnPressBack && props.closeOnPressBack() }}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        height: "auto",
                        borderTopRightRadius: 20,
                        paddingBottom: Platform.OS == "ios" ? 30 : 0
                    },
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.3)",

                    },
                    draggableIcon: {
                        display: 'none',
                    },
                }}
            >
                {props.children}
            </RBSheet>
        </View>
    );
});


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    iconWrapper: {
        paddingLeft: 10,
    },
    iconStyle: {
        height: 20,
        width: 20,
    },
});

export default CustomBottomSheet;


