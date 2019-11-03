/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import FormBody from "../FormBody";
import FormResult from "../FormResult";
import EndlessList from "../EndlessList";
import ProductForm from "../ProductForm";
import UsersList from "../UsersList-testTask";
import { Provider } from "react-redux";
import { store } from "../../configs/createStore";
import "../../services/CreditCardService";

type Props = {};

type State = {};

console.disableYellowBox = true;

class App extends React.Component<Props, State> {
  render() {
    return (
      // <EndlessList />
      // <ProductForm />

      // <UsersList />

      <Provider store={store}>
        <ScrollView>
          <View style={styles.container}>
            <FormBody />
            <FormResult />
          </View>

          {/* <View style={styles.container}></View> */}
        </ScrollView>
      </Provider>
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
});

export default App;
