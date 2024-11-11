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

  allplayslists: {},

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    backgroundColor: "#121212",
    flexDirection: "row",
    paddingBottom: 15,
    zIndex: 1000,
  },
});
