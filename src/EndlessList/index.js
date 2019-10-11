import React from "react";
import { StyleSheet, FlatList, View, Text, Image } from "react-native";

class EndlessList extends React.Component {
  state = {
    users: [],
  };

  pullData = num => {
    let { users } = this.state;
    fetch(`https://randomuser.me/api/?results=${num}&inc=name,picture`)
      .then(resp => resp.json())
      .then(resp => {
        let data = [];
        resp.results.forEach((el, index) => {
          data.push({
            index: ++index,
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
    this.pullData(200);
  }

  showComponent = user => {
    return (
      <View style={styles.userCard}>
        <Text style={[styles.mainText, styles.userNumber]}>{user.index}</Text>
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
    );
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.users}
        renderItem={({ item }) => this.showComponent(item)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    paddingTop: 70,
    backgroundColor: "#fafafa",
    height: "100%",
  },
  userCard: {
    flex: 1,
    width: "100%",
    alignItems: "stretch",
    height: 100,
  },
  userName: {
    flexDirection: "row",
  },
  mainText: {
    fontSize: 20,
  },
  userNumber: {},
  userPhoto: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  userFirstName: {
    alignSelf: "flex-start",
  },
  userLastName: {
    alignSelf: "flex-end",
  },
});

export default EndlessList;
