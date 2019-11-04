import React, { useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  Switch,
} from "react-native";
import { useUsersList } from "./useUsersList";

const UsersList = () => {
  const {
    data,
    userInput,
    isSomethingSelected,
    handleInput,
    handleCheckbox,
    onAdd,
    onDelete,
  } = useUsersList();

  const renderUsersList = user => {
    return (
      <>
        <View style={styles.userCard}>
          <View style={styles.userName}>
            <Text style={[styles.mainText, styles.userNumber]}>{user.key}</Text>
            <Text style={[styles.mainText, styles.userFirstName]}>
              {user.first}
            </Text>
            <Text style={[styles.mainText, styles.userLastName]}>
              {user.last}
            </Text>
          </View>
          <Switch
            onValueChange={val => handleCheckbox(val, user.key)}
            value={user.isChecked}
          />
        </View>
        <View style={styles.separator} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={data}
        extraData={data}
        keyExtractor={item => item.key.toString()}
        renderItem={({ item }) => renderUsersList(item)}
        initialNumToRender={10}
        windowSize={11}
      />
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Some text"
          value={userInput}
          onChangeText={val => handleInput(val)}
        />
        <View style={styles.buttonSection}>
          <Button
            title="Delete"
            onPress={onDelete}
            disabled={isSomethingSelected ? false : true}
          />
          <Button
            title="Add"
            onPress={onAdd}
            disabled={userInput ? false : true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    marginTop: Platform.OS === "ios" ? 70 : 20,
    marginBottom: 30,
    backgroundColor: "#fafafa",
    height: "100%",
  },
  listContainer: {
    flex: 1,
    textAlign: "center",
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
  separator: {
    height: 1,
    width: "85%",
    backgroundColor: "#000",
    alignSelf: "center",
    marginBottom: 4,
  },
  textInput: {
    height: 120,
    marginTop: 30,
    padding: 30,
  },
  buttonSection: {
    alignSelf: "center",
    width: "80%",
    paddingTop: Platform.OS === "ios" ? 30 : 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default UsersList;
