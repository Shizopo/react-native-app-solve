// @flow

import * as React from "react";
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Picker,
} from "react-native";

type Props = {
  onCreate: () => void,
  onEdit: () => void,
  handleInput: (name: string, value: string | number) => void,
  productTitle: string,
  productWeight: string,
  productSize: string,
  productOrigin: string,
  creatingMode: boolean,
  editingMode: boolean,
};

type State = {};

const renderResult = (
  productTitle,
  productWeight,
  productSize,
  productOrigin
) => {
  if (productTitle || productWeight || productSize || productOrigin) {
    return (
      <View style={styles.formResult}>
        <Text style={styles.resultString}>{JSON.stringify(productTitle)}</Text>
        <Text>{JSON.stringify(productWeight)}</Text>
        <Text>{JSON.stringify(productSize)}</Text>
        <Text>{JSON.stringify(productOrigin)}</Text>
      </View>
    );
  } else {
    return null;
  }
};

const ProductForm = ({
  onCreate,
  onEdit,
  handleInput,
  productTitle,
  productWeight,
  productSize,
  productOrigin,
  creatingMode,
  editingMode,
}: Props) => {
  return (
    <>
      <View style={styles.formSection}>
        <Text style={styles.formHeading}>Product</Text>
        <View style={styles.fromSectionHeader}>
          <Button
            title="Create"
            onPress={onCreate}
            disabled={creatingMode ? false : true}
          />
          <Button
            title="Edit"
            onPress={onEdit}
            disabled={creatingMode ? true : false}
          />
        </View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Some title"
          value={productTitle}
          onChangeText={val => handleInput("productTitle", val)}
          editable={creatingMode || editingMode ? true : false}
        />
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          placeholder="Some weight"
          value={productWeight}
          onChangeText={val => handleInput("productWeight", val)}
          editable={creatingMode || editingMode ? true : false}
        />
        <Text style={styles.label}>Size</Text>
        <TextInput
          style={styles.input}
          placeholder="Some size"
          value={productSize}
          onChangeText={val => handleInput("productSize", val)}
          editable={creatingMode || editingMode ? true : false}
        />
        <Text style={styles.label}>Produced by</Text>
        <Picker
          style={styles.input}
          selectedValue={productOrigin}
          onValueChange={val => handleInput("productOrigin", val)}
          enabled={creatingMode || editingMode ? true : false}
        >
          <Picker.Item label="Ukraine" value="Ukraine" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="USA" value="USA" />
          <Picker.Item label="China" value="China" />
        </Picker>
      </View>
      {!creatingMode
        ? renderResult(productTitle, productWeight, productSize, productOrigin)
        : null}
    </>
  );
};

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
