import React from "react";
import {
  Platform,
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";

type Props = {};

type State = {
  users: Array,
};

class EndlessList extends React.Component<Props, State> {
  state = {
    users: [],
  };

  pullData = (num: number) => {
    let { users } = this.state;
    fetch(`https://randomuser.me/api/?results=${num}&inc=name,picture`)
      .then(resp => resp.json())
      .then(resp => {
        let data: Array = [];
        resp.results.forEach((el: Object, index: number) => {
          data.push({
            key: ++index,
            first: el.name.first,
            last: el.name.last,
            photo: el.picture.thumbnail,
          });
        });
        this.setState({ users: data.slice() }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.pullData(1000);
  }

  showComponent = (user: Object) => {
    return (
      <>
        <View style={styles.userCard}>
          <Text style={[styles.mainText, styles.userNumber]}>{user.key}</Text>
          <View style={styles.userName}>
            <Text style={[styles.mainText, styles.userFirstName]}>
              {user.first}
            </Text>
            <Text style={[styles.mainText, styles.userLastName]}>
              {user.last}
            </Text>
          </View>
          <Image style={styles.userPhoto} source={{ uri: user.photo }} />
        </View>
        <View style={styles.separator} />
      </>
    );
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.users}
        renderItem={({ item }) => this.showComponent(item)}
        initialNumToRender={10}
        windowSize={11}
        getItemLayout={(data, index) => ({
          length: 140,
          offset: 140 * index,
          index,
        })}
      />
    );
  }
}

const styles = StyleSheet.create({
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

export default EndlessList;
