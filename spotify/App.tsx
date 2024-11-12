import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

// Importação das imagens
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

//icons
import homeImage from "./assets/icons/icons8-casa-50.png";
import libraryImage from "./assets/icons/library.png";
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
  return <Image source={PictureImage} style={styles.pictureImage} />;
};

const GifPowerrock = () => {
  return (
    <View style={styles.gifcontainer}>
      <Image source={powerrockImage} style={styles.gifpower} />
    </View>
  );
};
const GifRockGaucho = () => {
  return (
    <View style={styles.gifcontainer}>
      <Image source={rockgauchoImage} style={styles.gifgaucho} />
    </View>
  );
};
const GifMpb = () => {
  return (
    <View style={styles.gifcontainer}>
      <Image source={mpbImage} style={styles.gifmpb} />
    </View>
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
    <View style={styles.iconContainer}>
      <Image source={searchImage} style={styles.icons} />
      <Text style={styles.texticons}>{"Buscar"}</Text>
    </View>
  );
};
const Library = () => {
  return (
    <View style={styles.iconContainer}>
      <Image source={libraryImage} style={styles.icons} />
      <Text style={styles.texticons}>{"Biblioteca"}</Text>
    </View>
  );
};

const Musicaimg = () => {
  return <Image source={musica} style={styles.imgsection} />;
};
const Brasilimg = () => {
  return <Image source={brasilImage} style={styles.imgsection} />;
};
const Eventosimg = () => {
  return <Image source={eventosImage} style={styles.imgsection} />;
};
const Feitospravcimg = () => {
  return <Image source={feitopravc} style={styles.imgsection} />;
};
const Lancamentoimg = () => {
  return <Image source={lancamento} style={styles.imgsection} />;
};
const Mariliaimg = () => {
  return <Image source={marilia} style={styles.imgsection} />;
};
const Podcastsimg = () => {
  return <Image source={podcasts} style={styles.imgsection} />;
};
const Paradasimg = () => {
  return <Image source={paradas} style={styles.imgsection} />;
};
const Popimg = () => {
  return <Image source={pop} style={styles.imgsection} />;
};
const Lancamentosimg = () => {
  return <Image source={lancamentos} style={styles.imgsection} />;
};
const HipHopimg = () => {
  return <Image source={hiphop} style={styles.imgsection} />;
};
const Originaisimg = () => {
  return <Image source={originaisspotify} style={styles.imgsection} />;
};
const Paradas2img = () => {
  return <Image source={paradas2} style={styles.imgsection} />;
};
const Nocarroimg = () => {
  return <Image source={nocarro} style={styles.imgsection} />;
};
const Funkimg = () => {
  return <Image source={funk} style={styles.imgsection} />;
};
const SambaPagodeimg = () => {
  return <Image source={sambapagode} style={styles.imgsection} />;
};
const Descobririmg = () => {
  return <Image source={descobrir} style={styles.imgsection} />;
};
const Radioimg = () => {
  return <Image source={radio} style={styles.imgsection} />;
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
        {/* Campo de busca */}
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
          <Text style={styles.textgeneros}>Explore seus gêneros</Text>
          <View style={styles.allgifs}>
            <GifPowerrock />
            <GifRockGaucho />
            <GifMpb />
          </View>

          <Text style={styles.textgeneros}>Navegar por todas as seções</Text>
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

      {/* Footer fixo abaixo do ScrollView */}
      <View style={styles.footer}>
        <Home />
        <Search />
        <Library />
      </View>
    </View>
  );
}
