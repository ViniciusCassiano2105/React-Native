import React from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";

// video

// img Profile
import MyProfileImage from "./assets/eu.jpg";

// img Header
import PictureImage from "./assets/icons/icons8-câmera-100.png";

//gif
import powerrockImage from "./assets/videos/powerrock.gif";

import { styles } from "./styles";

const ProfileImage = () => {
  return (
    <View style={styles.circle}>
      <Image source={MyProfileImage} style={styles.profileImage} />
    </View>
  );
};

const PictureImageHead = () => {
  return (
    <View style={styles.circle}>
      <Image source={PictureImage} style={styles.pictureImage} />
    </View>
  );
};
const GifPowerrock = () => {
  return (
    <View style={styles.circle}>
      <Image source={powerrockImage} style={styles.pictureImage} />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <View style={styles.boxButton}>
            <ProfileImage />
            <View style={styles.buscar}>
              <Text style={styles.textbuscar}>Buscar</Text>
            </View>
          </View>
          <PictureImageHead />
        </View>
      </SafeAreaView>
      <View style={styles.containerimput}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="🔍  O que você quer ouvir?"
            placeholderTextColor="#555"
          />
        </View>
        <View>
          <GifPowerrock/>
        </View>
      </View>
    </View>
  );}