import { StyleSheet } from "react-native";

const patientCareStyles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    marginBottom: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#6532ad15",
    height: "100%",
  },
  headerSection: {
    flexDirection: "row",
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: "#6532ad",
    paddingTop: Platform.OS === "ios" ? 40 : 0,
    alignItems: "center",
  },
  headerSideMenuButton: {
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15,
    backgroundColor: "transparent",
    borderRadius: 20,
  },
  headerHeading: {
    paddingLeft: 10,
    fontSize: 22,
    color: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    marginRight: 15,
    marginLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "space-between",
  },
  searchInputIcon: {
    position: "absolute",
    top: 25,
    left: 15,
    width: 18,
    height: 18,
  },
  searchInput: {
    width: "85%",
    height: 40,
    paddingLeft: 40,
    backgroundColor: "#6532ad50",
    borderRadius: 50,
  },
  searchFiltersButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 15,
  },
  footerFiltersButtonIcon: {
    width: 18,
    height: 18,
  },
  mainSection: {
    marginLeft: 10,
    marginRight: 10,
  },
  cardContainer: {
    height: 125,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#6532ad50",
  },
  cardUserInfo: {},
  cardUserInfoHeading: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "flex-start",
    paddingRight: 5,
  },
  cardUserInfoHeadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#43266e",
  },
  cardUserInfoHeadingDoctor: {
    fontWeight: "bold",
    color: "#00000050",
  },
  cardSeparator: {
    width: "100%",
    alignSelf: "center",
    borderBottomColor: "#00000050",
    borderBottomWidth: 1,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  cardInfoSection: {},
  cardInfoSectionHeading: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#00000050",
  },
  cardInfoSectionText: {
    fontWeight: "bold",
    color: "#43266e",
  },
  cardInfoSectionTextInvalid: {
    fontWeight: "bold",
    color: "red",
  },
  footerSection: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
  footerHomeButton: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  footerHomeButtonIcon: {
    alignSelf: "center",
  },
});

export { patientCareStyles as styles };
