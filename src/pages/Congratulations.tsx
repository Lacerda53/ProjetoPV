import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
} from "react-native";
import colors from "../styles/colors";
import image from "../assets/congratulations.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

export function Congratulations() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Sua posição da fila{"\n"}foi{" "}
        <Text style={styles.titleNegrito}>acrescentada {"\n"}com sucesso</Text>
      </Text>
      <Image source={image} style={styles.img} />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 35,
    color: colors.white,
  },
  titleNegrito: {
    fontWeight: "bold",
  },
  img: {
    width: Dimensions.get("window").width - 50,
    resizeMode: "contain",
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 15,
    padding: 15,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
  },
  textButton: {
    color: colors.white,
    fontSize: 16,
  },
});
