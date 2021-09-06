import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

export function Check()
{
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          color={'#448893'}
        />
        <Text style={styles.label}>
          Eu li e concordo com os
          <Text style={{color:'#448893'}}> Termos e Condições de Política de Privacidade</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});