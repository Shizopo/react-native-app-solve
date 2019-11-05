// @flow

import React from "react";
import {
  Platform,
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";
import { styles } from "../../styles/EndlessListStyles";
import { useEndlessList } from "./useEndlessList";

type Props = {};

type State = {
  users: Array<{ key: number, first: string, last: string, photo: string }>,
};

const EndlessList = () => {
  const users = useEndlessList();

  const renderEndlessListItem = (user: {
    first: string,
    last: string,
    photo: string,
    key: number,
  }) => {
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

  return (
    <FlatList
      style={styles.container}
      data={users}
      renderItem={({ item }) => renderEndlessListItem(item)}
      keyExtractor={item => item.key.toString()}
      initialNumToRender={10}
      windowSize={11}
      getItemLayout={(data, index) => ({
        length: 140,
        offset: 140 * index,
        index,
      })}
    />
  );
};

export default EndlessList;
