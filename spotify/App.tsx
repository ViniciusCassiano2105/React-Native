import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyProfileImage from "./assets/eu.jpg";
import FavMusicImage from "./assets/musicascurtidas.jpg";
import { styles } from "./styles";

const ProfileImage = () => {
  return (
    <View style={styles.circle}>
      <Image source={MyProfileImage} style={styles.profileImage} />
    </View>
  );
};

const FavMusic = () => {
  return (
    <View>
      <Image source={FavMusicImage} style={styles.favMusic} />
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
            <View style={styles.buttonTudo}>
              <TouchableOpacity>
                <Text>Tudo</Text>
              </TouchableOpacity>
            </View>
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

      <View style={styles.allCards}>
        <View style={styles.cardsLeft}>
          <FavMusic />
          <Text style={styles.text}>Músicas Curtidas</Text>
        </View>
        <View style={styles.cardsRight}></View>
      </View>
    </View>
  );
}
