// @flow

import React from "react";
import {
  View,
  FlatList,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { styles } from "../../styles/patientCareStyles";

const renderListItem = user => {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardUserInfo}>
          <View style={styles.cardUserInfoHeading}>
            <Text style={styles.cardUserInfoHeadingText}>{user.name}, </Text>
            <Text style={styles.cardUserInfoHeadingText}>{user.gender}, </Text>
            <Text style={styles.cardUserInfoHeadingText}>{user.dob}, </Text>
            <Text style={styles.cardUserInfoHeadingText}>({user.age}) </Text>
          </View>
          <Text style={styles.cardUserInfoHeadingDoctor}>{user.doctor}</Text>
        </View>
        <View style={styles.cardSeparator} />
        <View style={styles.cardInfo}>
          <View style={styles.cardInfoSection}>
            <Text style={styles.cardInfoSectionHeading}>BP</Text>
            <Text
              style={
                Math.random() > 0.5
                  ? styles.cardInfoSectionText
                  : styles.cardInfoSectionTextInvalid
              }
            >
              {user.bp}
            </Text>
          </View>
          <View style={styles.cardInfoSection}>
            <Text style={styles.cardInfoSectionHeading}>A1C</Text>
            <Text
              style={
                user.a1c < 7.5
                  ? styles.cardInfoSectionText
                  : styles.cardInfoSectionTextInvalid
              }
            >
              {user.a1c}%
            </Text>
          </View>
          <View style={styles.cardInfoSection}>
            <Text style={styles.cardInfoSectionHeading}>Last Checkup</Text>
            <Text
              style={
                user.lastCheck < 6
                  ? styles.cardInfoSectionText
                  : styles.cardInfoSectionTextInvalid
              }
            >
              {user.lastCheck} months ago
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const PatientCare = ({
  patientsData,
  search,
  onPress,
}: {
  patientsData: [],
  search: string => void,
  onPress: () => void,
}) => {
  return (
    <>
      <StatusBar backgroundColor="#6532ad" />
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            style={styles.headerSideMenuButton}
            activeOpacity={0.5}
            onPress={onPress}
          >
            <Image source={require("../../icons/SideMenuIcon.png")} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Patient Care Opportunities</Text>
        </View>
        <View style={styles.searchSection}>
          <Image
            source={require("../../icons/SearchIcon.png")}
            style={styles.searchInputIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder={"Search"}
            onChangeText={input => search(input)}
            clearButtonMode={"while-editing"}
          />
          <TouchableOpacity
            style={styles.searchFiltersButton}
            activeOpacity={0.5}
            onPress={onPress}
          >
            <Image
              source={require("../../icons/SearchFiltersIcon.png")}
              style={styles.footerFiltersButtonIcon}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.mainSection}
          data={patientsData}
          renderItem={({ item }) => renderListItem(item)}
        />
        <View style={styles.footerSection}>
          <TouchableOpacity
            style={styles.footerHomeButton}
            activeOpacity={0.5}
            onPress={onPress}
          >
            <Image
              source={require("../../icons/HomeIcon.png")}
              style={styles.footerHomeButtonIcon}
            />
            <Text style={styles.footerButtonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PatientCare;
