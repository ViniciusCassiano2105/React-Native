import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#191414",
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
    zIndex: 1000,
    height: 80,
    backgroundColor: "#1DB954",
    flexDirection: "row",
    paddingBottom: 10,
  },

  boxButton: {
    flexDirection: "row",
  },

  circle: {
    alignItems: "left",
    justifyContent: "center",
    margin: 10,
  },
  profileImage: {
    marginTop: 40,
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  buttonTudo: {
    marginTop: 40,
    width: 65,
    height: 35,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
    color: "#000000",
  },

  buttonMusica: {
    marginTop: 40,
    width: 75,
    height: 35,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    color: "#000000",
  },

  allCards: {
    flexDirection: "row",
  },

  text: {
    justifyContent: "center",
    fontSize: 12,
  },

  cardsLeft: {
    marginTop: 100,
    marginLeft: 12,
    position: "relative",
    width: "45%",
    height: 60,
    backgroundColor: "#D50032",
    borderRadius: 4,
    flexDirection: "row",
  },
  cardsRight: {
    marginTop: 100,
    marginLeft: 12,
    marginRight: 12,
    position: "relative",
    width: "45%",
    height: 60,
    backgroundColor: "#D50032",
    borderRadius: 4,
  },

  favMusic: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: 60,
    width: 60,
  },
});
