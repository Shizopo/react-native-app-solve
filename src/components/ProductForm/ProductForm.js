// @flow

import React from "react";
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Picker,
} from "react-native";

type Props = {};

type State = {
  productTitle: string,
  productWeight: string,
  productSize: string,
  productOrigin: string,
  creatingMode: boolean,
  editingMode: boolean,
};

class ProductForm extends React.Component<Props, State> {
  state = {
    productTitle: "",
    productWeight: "",
    productSize: "",
    productOrigin: "",
    creatingMode: true,
    editingMode: false,
  };

  handleInput = (name: string, value: string | number) => {
    this.setState({ [name]: value });
  };

  onCreate = () => {
    this.setState({ creatingMode: false }, () => console.log("form created"));
  };

  onEdit = () => {
    this.setState(
      prevState => ({
        editingMode: !prevState.editingMode,
      }),
      () => console.log("editing mode")
    );
  };

  renderResult = () => {
    if (
      this.state.productTitle ||
      this.state.productWeight ||
      this.state.productSize ||
      this.state.productOrigin
    ) {
      return (
        <View style={styles.formResult}>
          <Text style={styles.resultString}>
            {JSON.stringify(this.state.productTitle)}
          </Text>
          <Text>{JSON.stringify(this.state.productWeight)}</Text>
          <Text>{JSON.stringify(this.state.productSize)}</Text>
          <Text>{JSON.stringify(this.state.productOrigin)}</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <View style={styles.formSection}>
          <Text style={styles.formHeading}>Product</Text>
          <View style={styles.fromSectionHeader}>
            <Button
              title="Create"
              onPress={this.onCreate}
              disabled={this.state.creatingMode ? false : true}
            />
            <Button
              title="Edit"
              onPress={this.onEdit}
              disabled={this.state.creatingMode ? true : false}
            />
          </View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Some title"
            value={this.state.productTitle}
            onChangeText={val => this.handleInput("productTitle", val)}
            editable={
              this.state.creatingMode || this.state.editingMode ? true : false
            }
          />
          <Text style={styles.label}>Weight</Text>
          <TextInput
            style={styles.input}
            placeholder="Some weight"
            value={this.state.productWeight}
            onChangeText={val => this.handleInput("productWeight", val)}
            editable={
              this.state.creatingMode || this.state.editingMode ? true : false
            }
          />
          <Text style={styles.label}>Size</Text>
          <TextInput
            style={styles.input}
            placeholder="Some size"
            value={this.state.productSize}
            onChangeText={val => this.handleInput("productSize", val)}
            editable={
              this.state.creatingMode || this.state.editingMode ? true : false
            }
          />
          <Text style={styles.label}>Produced by</Text>
          <Picker
            style={styles.input}
            selectedValue={this.state.productOrigin}
            onValueChange={val => this.handleInput("productOrigin", val)}
            enabled={
              this.state.creatingMode || this.state.editingMode ? true : false
            }
          >
            <Picker.Item label="Ukraine" value="Ukraine" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="USA" value="USA" />
            <Picker.Item label="China" value="China" />
          </Picker>
        </View>
        {!this.state.creatingMode ? this.renderResult() : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  formSection: {
    alignSelf: "center",
    width: "80%",
    paddingTop: Platform.OS === "ios" ? 30 : 0,
  },
  fromSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formHeading: {
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 26,
    fontWeight: "600",
  },
  label: {
    paddingTop: 20,
    fontSize: 16,
  },
  input: {
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  formResult: {
    width: "60%",
    alignSelf: "center",
    paddingTop: 20,
  },
  resultString: {
    fontSize: 18,
  },
});

export default ProductForm;
