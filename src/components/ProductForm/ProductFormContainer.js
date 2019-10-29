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
import ProductForm from "./ProductForm";

type Props = {};

type State = {
  productTitle: string,
  productWeight: string,
  productSize: string,
  productOrigin: string,
  creatingMode: boolean,
  editingMode: boolean,
};

class ProductFormContainer extends React.Component<Props, State> {
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

  // renderResult = () => {
  //   if (
  //     this.state.productTitle ||
  //     this.state.productWeight ||
  //     this.state.productSize ||
  //     this.state.productOrigin
  //   ) {
  //     return (
  //       <View style={styles.formResult}>
  //         <Text style={styles.resultString}>
  //           {JSON.stringify(this.state.productTitle)}
  //         </Text>
  //         <Text>{JSON.stringify(this.state.productWeight)}</Text>
  //         <Text>{JSON.stringify(this.state.productSize)}</Text>
  //         <Text>{JSON.stringify(this.state.productOrigin)}</Text>
  //       </View>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  render() {
    return (
      <ProductForm
        // renderResult={this.renderResult}
        onCreate={this.onCreate}
        onEdit={this.onEdit}
        handleInput={this.handleInput}
        productTitle={this.state.productTitle}
        productWeight={this.state.productWeight}
        productSize={this.state.productSize}
        productOrigin={this.state.productOrigin}
        creatingMode={this.state.creatingMode}
        editingMode={this.state.editingMode}
      />
    );
  }
}

export default ProductFormContainer;
