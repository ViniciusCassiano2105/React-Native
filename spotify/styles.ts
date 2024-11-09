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
    width: "100%",
    height: 100,
    backgroundColor: "#1DB954",
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

  infoTudo: {
    marginTop: 50,
    width: 65,
    height: 38,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    color: "#000000",
  },
});
