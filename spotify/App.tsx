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
import IncubusMusicImage from "./assets/incubus.jpg";
import RedHotMusicImage from "./assets/redhotchilipeppers.jpg";
import AudioslaveImage from "./assets/audioslave.jpg";

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
      <Image source={FavMusicImage} style={styles.Musicimgleft} />
    </View>
  );
};
const IncubusMusic = () => {
  return (
    <View>
      <Image source={IncubusMusicImage} style={styles.Musicimgright}/>
    </View>
  );
};
const RedHotMusic = () => {
  return (
    <View>
      <Image source={RedHotMusicImage} style={styles.Musicimgleft}/>
    </View>
  );
};
const AudioslaveMusic = () => {
  return (
    <View>
      <Image source={AudioslaveImage} style={styles.Musicimgright}/>
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
                <Text style={styles.textButton}>Tudo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonMusica}>
              <TouchableOpacity>
                <Text style={styles.textButton}>Música</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonPodcasts}>
              <TouchableOpacity>
                <Text style={styles.textButton}>Podcasts</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.allCards}>
        <View style={styles.cardsLeftTop}>
          <FavMusic />
          <Text style={styles.text}>{"Músicas \nCurtidas"}</Text>
        </View>
        <View style={styles.cardsRightTop}>
        <IncubusMusic/>
        <Text style={styles.text}>{"This Is \nIncubus"}</Text>
        </View>
        <View style={styles.cardsLeft}>
        <RedHotMusic />
        <Text style={styles.text}>{"This Is Red Hot\nChili Peppers"}</Text>
        </View>
        <View style={styles.cardsRight}>
        <AudioslaveMusic/>
        <Text style={styles.text}>{"Audioslave"}</Text>
        </View>
        <View style={styles.cardsLeft}>
        <FavMusic />
        <Text style={styles.text}>{"Músicas \nCurtidas"}</Text>
        </View>
        <View style={styles.cardsRight}>
        <IncubusMusic/>
        <Text style={styles.text}>{"This Is \nIncubus"}</Text>
        </View>
        <View style={styles.cardsLeft}>
        <FavMusic />
        <Text style={styles.text}>{"Músicas \nCurtidas"}</Text>
        </View>
        <View style={styles.cardsRight}>
        <IncubusMusic/>
        <Text style={styles.text}>{"This Is \nIncubus"}</Text>
        </View>
      </View>
    </View>
  );
}
