import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import MyProfileImage from "./assets/eu.jpg";
import PictureImage from "./assets/icons/icons8-câmera-100.png";
import brasilImage from "./assets/secoes/brasil.jpg";
import descobrir from "./assets/secoes/descobrir.jpg";
import eventosImage from "./assets/secoes/eventos.jpg";
import feitopravc from "./assets/secoes/feitopravc.jpg";
import funk from "./assets/secoes/funk.jpg";
import hiphop from "./assets/secoes/hiphop.jpg";
import lancamento from "./assets/secoes/lancamento.jpg";
import lancamentos from "./assets/secoes/lancamentos.jpg";
import marilia from "./assets/secoes/marilia.jpg";
import musica from "./assets/secoes/musica.jpg";
import nocarro from "./assets/secoes/nocarro.jpg";
import originaisspotify from "./assets/secoes/originais.jpg";
import paradas from "./assets/secoes/paradas.jpg";
import paradas2 from "./assets/secoes/paradas2.jpg";
import podcasts from "./assets/secoes/podcasts.jpg";
import pop from "./assets/secoes/pop.jpg";
import radio from "./assets/secoes/radio.jpg";
import sambapagode from "./assets/secoes/sambapagode.jpg";
import mpbImage from "./assets/videos/mpb.gif";
import powerrockImage from "./assets/videos/powerrock.gif";
import rockgauchoImage from "./assets/videos/rockgaucho.gif";

//img Musicbar
import ArcticMonkeysImage from "./assets/musicbar/arcticmonkeys.jpg";

//icons
import checkImage from "./assets/icons/check.png";
import deviceImage from "./assets/icons/device.png";
import homeImage from "./assets/icons/icons8-casa-50.png";
import libraryImage from "./assets/icons/library.png";
import playImage from "./assets/icons/play.png";
import searchImage from "./assets/icons/search.png";

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
    <TouchableOpacity>
      <Image source={PictureImage} style={styles.pictureImage} />
    </TouchableOpacity>
  );
};

const GifPowerrock = () => {
  return (
    <TouchableOpacity>
      <View style={styles.gifcontainer}>
        <Image source={powerrockImage} style={styles.gifpower} />
      </View>
    </TouchableOpacity>
  );
};
const GifRockGaucho = () => {
  return (
    <TouchableOpacity>
      <View style={styles.gifcontainer}>
        <Image source={rockgauchoImage} style={styles.gifgaucho} />
      </View>
    </TouchableOpacity>
  );
};
const GifMpb = () => {
  return (
    <TouchableOpacity>
      <View style={styles.gifcontainer}>
        <Image source={mpbImage} style={styles.gifmpb} />
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <View style={styles.iconContainer}>
      <Image source={homeImage} style={styles.icons} />
      <Text style={styles.texticons}>{"Início"}</Text>
    </View>
  );
};
const Search = () => {
  return (
    <View style={styles.iconsearch}>
      <Image source={searchImage} style={styles.icons} />
      <Text style={styles.texticons}>{"Buscar"}</Text>
    </View>
  );
};
const Library = () => {
  return (
    <View style={styles.iconContainer}>
      <Image source={libraryImage} style={styles.icons} />
      <Text style={styles.texticons}>{"Sua Biblioteca"}</Text>
    </View>
  );
};

const Musicaimg = () => {
  return (
    <TouchableOpacity>
      <Image source={musica} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Brasilimg = () => {
  return (
    <TouchableOpacity>
      <Image source={brasilImage} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Eventosimg = () => {
  return (
    <TouchableOpacity>
      <Image source={eventosImage} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Feitospravcimg = () => {
  return (
    <TouchableOpacity>
      <Image source={feitopravc} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Lancamentoimg = () => {
  return (
    <TouchableOpacity>
      <Image source={lancamento} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Mariliaimg = () => {
  return (
    <TouchableOpacity>
      <Image source={marilia} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Podcastsimg = () => {
  return (
    <TouchableOpacity>
      <Image source={podcasts} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Paradasimg = () => {
  return (
    <TouchableOpacity>
      <Image source={paradas} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Popimg = () => {
  return (
    <TouchableOpacity>
      <Image source={pop} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Lancamentosimg = () => {
  return (
    <TouchableOpacity>
      <Image source={lancamentos} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const HipHopimg = () => {
  return (
    <TouchableOpacity>
      <Image source={hiphop} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Originaisimg = () => {
  return (
    <TouchableOpacity>
      <Image source={originaisspotify} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Paradas2img = () => {
  return (
    <TouchableOpacity>
      <Image source={paradas2} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Nocarroimg = () => {
  return (
    <TouchableOpacity>
      <Image source={nocarro} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Funkimg = () => {
  return (
    <TouchableOpacity>
      <Image source={funk} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const SambaPagodeimg = () => {
  return (
    <TouchableOpacity>
      <Image source={sambapagode} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Descobririmg = () => {
  return (
    <TouchableOpacity>
      <Image source={descobrir} style={styles.imgsection} />
    </TouchableOpacity>
  );
};
const Radioimg = () => {
  return (
    <TouchableOpacity>
      <Image source={radio} style={styles.imgsection} />
    </TouchableOpacity>
  );
};

//icons
const Play = () => {
  return (
    <TouchableOpacity>
      <Image source={playImage} style={styles.iconMusicbar} />
    </TouchableOpacity>
  );
};
const Device = () => {
  return (
    <TouchableOpacity>
      <Image source={deviceImage} style={styles.iconMusicbar} />
    </TouchableOpacity>
  );
};
const Check = () => {
  return (
    <TouchableOpacity>
      <Image source={checkImage} style={styles.iconMusicbar} />
    </TouchableOpacity>
  );
};

// MusicBar
const ArcticMonkeysMusic = () => {
  return (
    <View>
      <Image source={ArcticMonkeysImage} style={styles.Musicbarcd} />
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

      <ScrollView>
        <View style={styles.containerimput}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="🔍  O que você quer ouvir?"
              placeholderTextColor="#555"
            />
          </View>
        </View>
        <View style={styles.explore}>
          <Text style={styles.textgeneros1}>Explore seus gêneros</Text>
          <View style={styles.allgifs}>
            <GifPowerrock />
            <GifRockGaucho />
            <GifMpb />
          </View>
          <Text style={styles.textgeneros2}>Navegar por todas as seções</Text>
          <View style={styles.allsection}>
            <View style={styles.section}>
              <Musicaimg />
            </View>
            <View style={styles.section}>
              <Brasilimg />
            </View>
            <View style={styles.section}>
              <Eventosimg />
            </View>
            <View style={styles.section}>
              <Feitospravcimg />
            </View>
            <View style={styles.section}>
              <Lancamentoimg />
            </View>
            <View style={styles.section}>
              <Mariliaimg />
            </View>
            <View style={styles.section}>
              <Paradasimg />
            </View>
            <View style={styles.section}>
              <Podcastsimg />
            </View>
            <View style={styles.section}>
              <Popimg />
            </View>
            <View style={styles.section}>
              <Lancamentosimg />
            </View>
            <View style={styles.section}>
              <HipHopimg />
            </View>
            <View style={styles.section}>
              <Originaisimg />
            </View>
            <View style={styles.section}>
              <Paradas2img />
            </View>
            <View style={styles.section}>
              <Nocarroimg />
            </View>
            <View style={styles.section}>
              <Funkimg />
            </View>
            <View style={styles.section}>
              <SambaPagodeimg />
            </View>
            <View style={styles.section}>
              <Descobririmg />
            </View>
            <View style={styles.section}>
              <Radioimg />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.Musicbar}>
        <View style={styles.containerMusicbar}>
          <ArcticMonkeysMusic />
          <Text style={styles.textMusicbar}>
            {"Teddy Picker \nArtic Monkeys"}
          </Text>
          <View style={styles.alliconsMusicbar}>
            <Device />
            <Check />
            <Play />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Home />
        </TouchableOpacity>
        <TouchableOpacity>
          <Search />
        </TouchableOpacity>
        <TouchableOpacity>
          <Library />
        </TouchableOpacity>
      </View>
    </View>
  );
}
