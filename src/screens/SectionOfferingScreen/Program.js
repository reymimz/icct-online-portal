import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Program = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text>Program:</Text>
      <View style={styles.pickerborder}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="BSIT-" value="" />
        <Picker.Item label="DHRM-" value="" />
      </Picker>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: "center"
  },
  pickerborder: {
    borderWidth: 1,
  }
});

export default Program;