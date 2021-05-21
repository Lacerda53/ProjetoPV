import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import colors from "../styles/colors";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subTitle}>Bem Vindo,</Text>
        <Text style={styles.title}>José da Silva</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 10,
    flex: 1,
  },
  title: {
    color: colors.title,
    fontSize: 30,
    fontWeight: "700",
    marginTop: 25,
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  scroll: {
    paddingHorizontal: 15,
  },
  body: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    marginTop: 20,
    position: "absolute",
    bottom: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    width: "100%",
  },
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  icon: {
    fontSize: 25,
    color: colors.white,
  },
});
