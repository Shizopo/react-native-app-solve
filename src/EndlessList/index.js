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

  showComponent = user => {
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
    height: 180,
    paddingLeft: 30,
    paddingRight: 30,
  },
  userName: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainText: {
    fontSize: 22,
  },
  userNumber: {
    fontSize: 24,
    alignSelf: "center",
  },
  userPhoto: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
  },
  userFirstName: {
    alignSelf: "flex-start",
  },
  userLastName: {
    alignSelf: "flex-end",
  },
  separator: {
    height: 1,
    width: "85%",
    backgroundColor: "#000",
    alignSelf: "center",
  },
});

export default EndlessList;
