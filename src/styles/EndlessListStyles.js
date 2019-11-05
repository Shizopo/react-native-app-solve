import { StyleSheet } from "react-native";

const EndlessListStyles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    paddingTop: Platform.OS === "ios" ? 70 : 20,
    backgroundColor: "#fafafa",
    height: "100%",
  },
  userCard: {
    flex: 1,
    width: "100%",
    height: 135,
    paddingRight: 30,
    paddingLeft: 30,
  },
  userName: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  userFirstName: {
    alignSelf: "flex-start",
  },
  userLastName: {
    alignSelf: "flex-end",
  },
  mainText: {
    fontSize: 22,
  },
  userNumber: {
    fontSize: 18,
    alignSelf: "flex-start",
    paddingTop: 10,
  },
  userPhoto: {
    position: "absolute",
    top: 25,
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 15,
    alignSelf: "center",
  },
  separator: {
    height: 1,
    width: "85%",
    backgroundColor: "#000",
    alignSelf: "center",
    marginBottom: 4,
  },
});

export { EndlessListStyles as styles };
