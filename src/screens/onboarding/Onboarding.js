import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { onboardingArray } from '../../utils/data';
import { fonts } from '../../utils/fonts';
import { getonboardingResult } from '../../utils/apis';
import { getOnboardResultsFunction, transformOnboardingData } from '../../utils/functions';
import Globalloader from '../../components/Globalloader';
const OnboardingScreen = ({ navigation }) => {
  const onboardingRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)
  const [onboardData, setOnboardData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getOnboardResultsFunction(getonboardingResult);
      const transformedData = transformOnboardingData(response.about_us);
      setOnboardData(transformedData);
    } catch (error) {
      console.error('Error fetching onboarding data:', error);
    }
  };

  const handleDone = () => {
    navigation.navigate('AuthFiles');
  };
  const handleNext = () => {
    if (activeIndex < onboardData.length - 1) {
      setActiveIndex(activeIndex + 1);
      onboardingRef.current?.goNext();
    } else {
    }

  };

  const getTitleStyle = () => ({
    fontSize: 28,
    textAlign: "right",
    fontFamily: fonts.MONTESERAT_BOLD
  });

  const getSubtitleStyle = () => ({
    fontSize: 16,
    color: fonts.descriptionTxtColor,
    fontFamily: fonts.MONTESERAT_REGULAR
  });

  return (
    <>
      {onboardData.length > 0 ?
        <View style={{ flex: 1 }}>
          <Onboarding
            ref={onboardingRef}
            showSkip={false}
            showDone={false}
            showPagination={false}
            pageIndexCallback={(pageIndex) => {
              setActiveIndex(pageIndex)
            }}

            imageContainerStyles={{
              height: 300,
              justifyContent: 'center'

            }}
            pages={onboardData}
            titleStyles={getTitleStyle()}
            subTitleStyles={getSubtitleStyle()}
          />
          <View style={styles.bottombarView}>
            <View style={{ flexDirection: 'row' }}>
              {onboardData?.map((item, index) => {
                console.log("Check Iteee", item)
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
              if (onboardData.length - 1 == activeIndex) {
                handleDone();
              } else {
                handleNext()
              }


            }} style={styles.nextButton}>
              <Text style={styles.nextTxt}>{onboardData.length - 1 == activeIndex ? "Start" : "Next"}</Text>
            </TouchableOpacity>
          </View>
          {activeIndex != 2 && <TouchableOpacity onPress={() => handleDone()} style={styles.skipButton}>
            <Text style={{ fontSize: 16, fontFamily: fonts.MONTESERAT_MEDIUM, color: '#000' }}>Skip</Text>
          </TouchableOpacity>}
        </View> :
        <View style={styles.defaultcontainer}>
          <Globalloader size={"large"} color={fonts.PRIMARY_COLOR} />
        </View>
      }

    </>

  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  dot: {
    height: 10,
    margin: 2,
    top: 15,
    borderRadius: 10,
    backgroundColor: 'red'
  },
  defaultcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  skipButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 15
  },
  bottombarView: {
    position: 'absolute', bottom: 0,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 50
  },
  nextTxt: {
    fontFamily: fonts.MONTESERAT_BOLD,
    color: fonts.WHITE
  },
  nextButton: {
    backgroundColor: fonts.PRIMARY_COLOR,
    padding: 10,
    // margin: 3,
    paddingHorizontal: 28,
    borderRadius: 40
  }
})