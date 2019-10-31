import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  Switch,
} from "react-native";

const UsersList = ({
  data,
  userInput,
  isSomethingSelected,
  handleInput,
  handleCheckbox,
  onAdd,
  onDelete,
}) => {
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

// class UsersList extends React.Component {
//   state = {
//     data: [],
//     isSomethingSelected: false,
//     userInput: "",
//   };

//   fetchData = num => {
//     let { data } = this.state;
//     fetch(`https://randomuser.me/api/?results=${num}&inc=name`)
//       .then(resp => resp.json())
//       .then(resp => {
//         let data = [];
//         resp.results.forEach((el, index) => {
//           data.push({
//             key: index,
//             first: el.name.first,
//             isChecked: false,
//           });
//         });
//         this.setState({ data: data.slice() });
//       })
//       .catch(err => console.log(err));
//   };

//   componentDidMount() {
//     this.fetchData(10);
//   }

//   handleInput = (name, value) => {
//     this.setState({ [name]: value });
//   };

//   onAdd = () => {
//     let data = this.state.data;
//     let text = this.state.userInput;
//     let key = data.length > 0 ? data[data.length - 1].key + 1 : 0;
//     this.setState(
//       {
//         data: [...this.state.data, { first: text, key: key, isChecked: false }],
//       },
//       this.textInput.clear()
//     );
//   };

//   onDelete = () => {
//     let data = this.state.data;
//     let selectedItems = data.filter(el => el.isChecked !== true);
//     this.setState({
//       data: selectedItems,
//       isSomethingSelected: false,
//     });
//   };

//   handleCheckbox = (val, key) => {
//     let data = this.state.data;
//     let selectedItemIndex = data.findIndex(el => el.key === key);
//     data[selectedItemIndex].isChecked = val;

//     this.setState({
//       data,
//       isSomethingSelected: true,
//     });
//   };

//   renderUsersList = user => {
//     return (
//       <>
//         <View style={styles.userCard}>
//           <View style={styles.userName}>
//             <Text style={[styles.mainText, styles.userNumber]}>{user.key}</Text>
//             <Text style={[styles.mainText, styles.userFirstName]}>
//               {user.first}
//             </Text>
//             <Text style={[styles.mainText, styles.userLastName]}>
//               {user.last}
//             </Text>
//           </View>
//           <Switch
//             onValueChange={val => this.handleCheckbox(val, user.key)}
//             value={user.isChecked}
//           />
//         </View>
//         <View style={styles.separator} />
//       </>
//     );
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={styles.listContainer}
//           data={this.state.data}
//           extraData={this.state}
//           keyExtractor={item => item.key.toString()}
//           renderItem={({ item }) => this.renderUsersList(item)}
//           initialNumToRender={10}
//           windowSize={11}
//         />
//         <View style={styles.bottomContainer}>
//           <TextInput
//             style={styles.textInput}
//             multiline={true}
//             placeholder="Some text"
//             ref={input => {
//               this.textInput = input;
//             }}
//             value={this.state.value}
//             onChangeText={val => this.handleInput("userInput", val)}
//           />
//           <View style={styles.buttonSection}>
//             <Button
//               title="Delete"
//               onPress={this.onDelete}
//               disabled={this.state.isSomethingSelected ? false : true}
//             />
//             <Button
//               title="Add"
//               onPress={this.onAdd}
//               disabled={this.state.userInput ? false : true}
//             />
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

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
