import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#121212",
    minHeight: "100%",
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  box: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 85,
    backgroundColor: "#121212",
    flexDirection: "row",
    paddingBottom: 15,
    zIndex: 1000,
  },

  boxButton: {
    flexDirection: "row",
  },

  circle: {
    justifyContent: "center",
    margin: 10,
  },
  profileImage: {
    marginLeft: 5,
    marginTop: 45,
    width: 35,
    height: 35,
    borderRadius: 40,
  },

  textButton: {
    color: "#FFFFFF",
  },

  buttonTudo: {
    marginTop: 40,
    width: 65,
    height: 35,
    borderRadius: 40,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
  },

  buttonMusica: {
    marginTop: 40,
    width: 75,
    height: 35,
    borderRadius: 40,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    color: "#000000",
  },

  buttonPodcasts: {
    marginTop: 40,
    width: 85,
    height: 35,
    borderRadius: 40,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    color: "#000000",
  },

  allCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  text: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 10,
  },

  cardsLeftTop: {
    marginTop: 100,
    marginLeft: 12,
    width: "45%",
    height: 60,
    backgroundColor: "#333333",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  cardsRightTop: {
    marginTop: 100,
    marginLeft: 12,
    marginRight: 12,
    position: "relative",
    width: "45%",
    height: 60,
    backgroundColor: "#333333",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },

  cardsLeft: {
    marginTop: 10,
    marginLeft: 12,
    width: "45%",
    height: 60,
    backgroundColor: "#333333",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  cardsRight: {
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    position: "relative",
    width: "45%",
    height: 60,
    backgroundColor: "#333333",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },

  Musicimgleft: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: 60,
    width: 60,
  },

  Musicimgright: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: 60,
    width: 60,
  },

  textStation: {
    marginTop: 20,
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  textStationScroll: {
    marginTop: 10,
    color: "#ADADAD",
    fontSize: 12,
    paddingLeft: 11,
  },

  textPlaylistScroll: {
    marginTop: 10,
    marginBottom: 70,
    color: "#ADADAD",
    fontSize: 12,
    position: "relative",
    left: 11,
  },

  imgStation: {
    marginTop: 15,
    marginLeft: 12,
    width: 150,
    height: 150,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 15,
    zIndex: 1000,
    backgroundColor: "#00000080",
  },

  iconContainer: {
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 35,
  },

  icons: {
    width: 25,
    height: 25,
  },
  texticons: {
    position: "relative",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 12,
  },
  // pag search

  buscar: {
    marginTop: 40,
    width: 85,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
  },
  textbuscar: {
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  pictureImage: {
    marginLeft: 185,
    marginTop: 42,
    width: 36,
    height: 36,
    borderRadius: 40,
  },

  containerimput: {
    position: "absolute",
    top: 120,
    width: "100%",
    height: 85,
    backgroundColor: "#121212",
    zIndex: 1000,
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "#333333",
    fontSize: 18,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  gifcontainer: {
    width: 116,
    height: 210,
    borderRadius: 20,
    overflow: "hidden",
  },

  explore: {
    paddingVertical: 170,
  },

  textgeneros: {
    fontSize: 17,
    paddingVertical: 30,
    paddingHorizontal: 12,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  allgifs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  gifpower: {
    width: "100%",
    height: "106%",
    bottom:15
  },

  gifgaucho:{
    width: "100%",
    height: "110%",
    position:"relative",
    bottom:27
  },

  gifmpb:{
    width: "100%",
    height: "112%",
    position:"relative",
    bottom:33
  },
  

  gif: {
    width: "100%",
    height: "100%",
  },

  imgsection: {
    width: 180,
    height: 100, // A imagem ocupará toda a altura da div
    borderRadius: 4,
    objectFit: "cover", // Isto ajuda a manter a imagem coberta sem distorção, se necessário
  },

  allsection: {
    flexDirection: "row", // Organiza os itens horizontalmente
    flexWrap: "wrap", // Permite quebrar para a próxima linha
    marginLeft: 10, // Espaço à esquerda do contêiner
  },

  section: {
    // Espaço entre os itens
    width: "50%", // Ajuste para caber duas colunas (50% cada, com margem)
    height: 105, // Altura fixa para cada imagem
    overflow: "hidden", // Garante que a imagem não ultrapasse os limites da div
    marginBottom: 10, // Espaço entre as linhas de imagens
  },
  scrollView: {
    flex: 1, // Faz com que o ScrollView ocupe todo o espaço disponível
    paddingBottom: 20, // Pode adicionar um pequeno padding no final
  },
});
