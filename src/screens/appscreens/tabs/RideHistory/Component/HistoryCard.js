import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../../../../../utils/fonts'
import CheckBox from './CheckBox'

const HistoryCard = ({ onPress, wallet }) => {
    return (
        <>

            {wallet ?
                <View style={[styles.bookingCard, { margin: 4 }]}>
                    <View style={styles.rowViews}>
                        <Text style={styles.txt}>01 may 2024</Text>
                        <View style={styles.addwalletButton}>
                            <Text style={[styles.txt, { color: '#fff',fontSize:12 }]}>Added to wallet</Text>
                        </View>
                    </View>
                    <View style={[styles.rowViews, { marginTop: 6 }]}>
                        <Text style={styles.txt}>$ 08</Text>
                    </View>

                </View> : <View style={styles.bookingCard}>
                    <View style={styles.rowViews}>
                        <Text style={styles.txt}>#355678</Text>
                        <Text style={styles.txt}>08$</Text>
                    </View>
                    <View style={[styles.rowViews, { marginTop: 6 }]}>
                        <Text style={styles.timedatetxt}>01 may 2024, 04:00pm-06:00pm</Text>
                        <View style={{ top: 15 }}>
                            <CheckBox onPress={() => onPress("card1")} />
                        </View>

                    </View>

                </View>
            }
        </>

    )
}

export default HistoryCard

const styles = StyleSheet.create({
    bookingCard: {
        backgroundColor: '#fff',
        elevation: 2, // Android
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 2 }, // iOS
        shadowOpacity: 0.25, // iOS
        shadowRadius: 3.84,
        borderRadius: 20,
        padding: 15,
        justifyContent: 'center'
    },
    addwalletButton: {
        backgroundColor: fonts.PRIMARY_COLOR,
        borderRadius: 20,
        padding:4

    },
    rowViews: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timedatetxt: {
        fontFamily: fonts.MONTESERAT_REGULAR
    },
    txt: {
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: '#000'
    }
})