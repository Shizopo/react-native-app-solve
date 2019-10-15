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
  productTitle?: string,
  productWeight?: string,
  productSize?: string,
  productOrigin?: string,
  creatingMode: boolean,
};

class ProductForm extends React.Component<Props, State> {
  state = {
    value: undefined,
    productTitle: undefined,
    productWeight: undefined,
    productSize: undefined,
    productOrigin: undefined,
    creatingMode: true,
    editingMode: false,
  };

  handleInput = (name, value) => {
    // console.log(name, value);
    this.setState({ [name]: value });
  };

  onCreate = () => {
    this.setState({ creatingMode: false }, () => console.log("created"));
  };

  onEdit = () => {
    this.setState({ editingMode: true }, () => console.log("editing mode"));
  };

  render() {
    return (
      <>
        <View style={styles.formSection}>
          <Text style={styles.formHeading}>Product</Text>
          <View style={styles.fromSectionHeader}>
            <Button
              title="Create"
              style={styles.createButton}
              onPress={this.onCreate}
              disabled={this.state.creatingMode ? false : true}
            />
            <Button
              title="Edit"
              style={styles.editButton}
              onPress={this.onEdit}
              disabled={this.state.creatingMode ? true : false}
            />
          </View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            type="text"
            name="productTitle"
            id="productTitle"
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
            type="text"
            name="productWeight"
            id="productWeight"
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
            type="text"
            name="productSize"
            id="productSize"
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
            type="text"
            name="productOrigin"
            id="productOrigin"
            placeholder="Some title"
            selectedValue={this.state.productOrigin}
            onValueChange={val => this.handleInput("productOrigin", val)}
          >
            <Picker.Item label="Ukraine" value="Ukraine" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="USA" value="USA" />
            <Picker.Item label="China" value="China" />
          </Picker>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
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
  invalidInput: {
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});

export default ProductForm;
