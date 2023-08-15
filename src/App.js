import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
  TextInput
} from "react-native";

const App = () => {
  const [isClicked, setisClicked] = useState(false);
  const [cantClicks, setCantClicks] = useState(0);
  // const [displayText, setDisplayText] = useState(`Like | ${cantClicks}`);

  const handleButtonClick = () => {
    setisClicked(!isClicked);
    setCantClicks(cantClicks + 1);
    // setDisplayText(`Like | ${cantClicks}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isClicked && styles.liked]}
        onPress={handleButtonClick}
      >
        <Text style={styles.buttonText}>Like | {cantClicks}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    padding: 10,
    backgroundColor: "#007AFF",
    alignItems: "center",
    borderRadius: 5
  },
  liked: {
    backgroundColor: "#00C853"
  },
  textButton: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderWidth: 1
  }
});

export default App;
