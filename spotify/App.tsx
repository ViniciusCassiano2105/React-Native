import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
//Img cards
import AliceInChainsImage from "./assets/aliceinchains.jpg";
import AllenLandImage from "./assets/allenlande.jpg";
import ArticMonkeysImage from "./assets/articmonkeys.jpg";
import AudioslaveImage from "./assets/audioslave.jpg";
import MyProfileImage from "./assets/eu.jpg";
import IncubusMusicImage from "./assets/incubus.jpg";
import LinkinParkImage from "./assets/linkinpark.jpg";
import FavMusicImage from "./assets/musicascurtidas.jpg";
import RedHotMusicImage from "./assets/redhotchilipeppers.jpg";

//Img Station
import RadioAlterBridgeImage from "./assets/radioalterbridge.jpg";
import RadioAudioslaveImage from "./assets/radioaudioslave.jpg";
import RadioChrisCornellImage from "./assets/radiochriscornell.jpg";
import RadioEdguyImage from "./assets/radioedguy.jpg";
import RadioFooFightersImage from "./assets/radiofoofighters.jpg";
import RadioPearlJamImage from "./assets/radiopearljam.jpg";
import RadioStrokesImage from "./assets/radiostrokes.jpg";

import { styles } from "./styles";

const ProfileImage = () => {
  return (
    <View style={styles.circle}>
      <Image source={MyProfileImage} style={styles.profileImage} />
    </View>
  );
};
//const cards
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
      <Image source={IncubusMusicImage} style={styles.Musicimgright} />
    </View>
  );
};
const RedHotMusic = () => {
  return (
    <View>
      <Image source={RedHotMusicImage} style={styles.Musicimgleft} />
    </View>
  );
};
const AudioslaveMusic = () => {
  return (
    <View>
      <Image source={AudioslaveImage} style={styles.Musicimgright} />
    </View>
  );
};
const AliceInChainsMusic = () => {
  return (
    <View>
      <Image source={AliceInChainsImage} style={styles.Musicimgright} />
    </View>
  );
};
const ArticMonkeysMusic = () => {
  return (
    <View>
      <Image source={ArticMonkeysImage} style={styles.Musicimgright} />
    </View>
  );
};

const AllenLandeMusic = () => {
  return (
    <View>
      <Image source={AllenLandImage} style={styles.Musicimgright} />
    </View>
  );
};

const LinkinParkMusic = () => {
  return (
    <View>
      <Image source={LinkinParkImage} style={styles.Musicimgright} />
    </View>
  );
};

//const stations
const RadioAlterBridgeMusic = () => {
  return (
    <View>
      <Image source={RadioAlterBridgeImage} style={styles.imgStation} />
      <Text style={styles.textStationScroll}>
        {"Staind, P.O.D, Puddle Of \nMudd, Rise Against,..."}
      </Text>
    </View>
  );
};
const RadioAudioslaveMusic = () => {
  return (
    <View>
      <Image source={RadioAudioslaveImage} style={styles.imgStation} />
      <Text style={styles.textStationScroll}>
        {"Red Hot Chili Peppers, \nRage Against The Machi..."}
      </Text>
    </View>
  );
};
const RadioChrisCornellMusic = () => {
  return (
    <View>
      <Image source={RadioChrisCornellImage} style={styles.imgStation} />
      <Text style={styles.textStationScroll}>
        {"Silverchair, Temple Of The \nDog, Mad Season,..."}
      </Text>
    </View>
  );
};
const RadioEdguyMusic = () => {
  return (
    <View>
      <Image source={RadioEdguyImage} style={styles.imgStation} />
      <Text style={styles.textStationScroll}>
        {"Place Vendome, Allen Lande \nIced Earth,..."}
      </Text>
    </View>
  );
};
const RadioFooFightersMusic = () => {
  return (
    <View>
      <Image source={RadioFooFightersImage} style={styles.imgStation} />
      <Text style={styles.textStationScroll}>
        {"The Strokes, Slipknot, Rise \nAgainst, Creed,..."}
      </Text>
    </View>
  );
};
const RadioPearlJamMusic = () => {
  return (
    <View>
      <Image source={RadioPearlJamImage} style={styles.imgStation} />
      <Text style={styles.textStationScroll}>
        {"Incubus, Bush, Silver Chair, \nTemple Of The Dog,..."}
      </Text>
    </View>
  );
};
const RadioStrokesMusic = () => {
  return (
    <View>
      <Image source={RadioStrokesImage} style={styles.imgStation} />
      <Text style={styles.textStationScroll}>
        {"Arctic Monkeys, The Kooks, Oasis, \nWeezer, Stereophonics,..."}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView style={styles.screen}>
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
          <IncubusMusic />
          <Text style={styles.text}>{"This Is \nIncubus"}</Text>
        </View>
        <View style={styles.cardsLeft}>
          <RedHotMusic />
          <Text style={styles.text}>{"This Is Red Hot\nChili Peppers"}</Text>
        </View>
        <View style={styles.cardsRight}>
          <AudioslaveMusic />
          <Text style={styles.text}>{"Audioslave"}</Text>
        </View>
        <View style={styles.cardsLeft}>
          <AliceInChainsMusic />
          <Text style={styles.text}>{"This Is Alice In \nChains"}</Text>
        </View>
        <View style={styles.cardsRight}>
          <ArticMonkeysMusic />
          <Text style={styles.text}>{"Arctic Monkeys"}</Text>
        </View>
        <View style={styles.cardsLeft}>
          <AllenLandeMusic />
          <Text style={styles.text}>{"This Is Allen \nLand"}</Text>
        </View>
        <View style={styles.cardsRight}>
          <LinkinParkMusic />
          <Text style={styles.text}>{"Linkin Park"}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.textStation}>Estações recomendadas</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <RadioAlterBridgeMusic />
          <RadioAudioslaveMusic />
          <RadioChrisCornellMusic />
          <RadioEdguyMusic />
          <RadioFooFightersMusic />
          <RadioPearlJamMusic />
          <RadioStrokesMusic />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
