import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import MyProfileImage from "./assets/eu.jpg";
import { styles } from "./styles";

const ProfileImage = () => {
  return (
    <View style={styles.circle}>
      <Image source={MyProfileImage} style={styles.profileImage} />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <ProfileImage />
          <View style={styles.infoTudo}>
            <Text>Tudo</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
