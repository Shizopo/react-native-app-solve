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

class ServerAPI extends React.Component<Props, State> {
  callAPI = data => {
    return new Promise(resolve => {
      setTimeout(() => resolve(data), 2000);
    });
  };
}

export default ServerAPI;
