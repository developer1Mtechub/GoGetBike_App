import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { onboardingArray } from '../../utils/data';
import { fonts } from '../../utils/fonts';
const OnboardingScreen = ({navigation}) => {
  const onboardingRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)
  const handleDone = () => {
    navigation.navigate('AuthFiles');
  };
  const handleNext = () => {
    if (activeIndex < onboardingArray.length - 1) {
      setActiveIndex(activeIndex + 1);
      onboardingRef.current?.goNext();
    } else {
    }

  };


  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        ref={onboardingRef}
        showSkip={false}
        showDone={false}
        showPagination={false}
        pageIndexCallback={(pageIndex) => {
          setActiveIndex(pageIndex)
        }}

        pages={onboardingArray}
        titleStyles={{
          fontSize: 28,
          textAlign: "right",
          fontFamily: fonts.MONTESERAT_BOLD
        }}
        subTitleStyles={{
          fontSize: 16,
          color:fonts.descriptionTxtColor,
          fontFamily: fonts.MONTESERAT_REGULAR
        }}
      />
      <View style={styles.bottombarView}>
        <View style={{ flexDirection: 'row' }}>
          {onboardingArray.map((item, index) => {
            return (
              <View style={[styles.dot, {
                width: activeIndex == index ? 40 : 10,
                backgroundColor: activeIndex == index ? fonts.PRIMARY_COLOR : 'grey'
              }]}>
              </View>
            )
          })
          }
        </View>
        <TouchableOpacity onPress={() => {
          if (onboardingArray.length - 1 == activeIndex) {
            handleDone();
          } else {
            handleNext()
          }


        }} style={styles.nextButton}>
          <Text style={styles.nextTxt}>{onboardingArray.length - 1 == activeIndex ? "Start" : "Next"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  dot: {
    height: 10,
    margin: 2,
    borderRadius: 10,
    backgroundColor: 'red'
  },
  bottombarView: {
    position: 'absolute', bottom: 0,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row', padding: 20
  },
  nextTxt: {
    fontFamily: fonts.MONTESERAT_SEMIBOLD,
    color: fonts.WHITE
  },
  nextButton: {
    backgroundColor: fonts.PRIMARY_COLOR,
    padding: 5,
    margin: 3,
    paddingHorizontal: 12,
    borderRadius: 20
  }
})