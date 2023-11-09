import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { OnboardFlow } from 'react-native-onboard';
import { Image } from 'react-native';

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
    <OnboardFlow
      pages={[
        {
          title: 'Snap a picture',
          subtitle: 'List all your ingredients with just a tap of a button',
          imageComponent: <Image style={styles.image1} source={require('../../../assets/Onboarding-1.png')} />,
        },
        {
          title: 'Explore a recipe',
          subtitle: 'Explore what the world have to offer at the comfort of your home',
          imageComponent: <Image style={styles.image} source={require('../../../assets/Onboarding-2.png')} />,
        },
        {
          title: 'Be a chef',
          subtitle: 'Be the chef that you always wanted to be',
          imageComponent: <Image style={styles.image} source={require('../../../assets/Onboarding-3.png')} />,
        }
      ]}
      type={'inline'}
      style={{ backgroundColor: '#FFF5D6' }}
      titleStyle={{ color: '#FF8400', fontWeight: "900", fontSize: 36 }}
      subtitleStyle={{ color: '#7F7F7F', marginTop: 10, fontWeight: "300", fontSize: 20, paddingHorizontal: 20 }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  image1: {
    // width: "50%",
    marginTop: 150,
    height: 270,
    width: 200,
    objectFit: "contain",
  },
  image: {
    // width: "50%",
    marginTop: 150,
    height: 270,
    width: 260,
    objectFit: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
