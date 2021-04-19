import {StyleSheet} from "react-native";

export default StyleSheet.create({
  homeScreen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttons: {
    width: "50%",
    height: "10%",
    backgroundColor: "#092BC6",
    borderRadius: 40,
  },
  buttonsView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textButton: {
    top: "25%",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  separator: {
    marginVertical: "8.5%",
  },
});
