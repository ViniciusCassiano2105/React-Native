import React from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
          <View style={styles.buttonTudo}>
          <TouchableOpacity>
                <Text>Tudo</Text>
              </TouchableOpacity>
            <View style={styles.buttonMusica}>
            <TouchableOpacity>
                <Text>Música</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonPodcasts}>
              <TouchableOpacity>
                <Text>Podcasts</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
