import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

  const [message, setMessage] = useState("");

  const showMessage = () => {
    setMessage("𝖸𝗈𝗎 𝗁𝖺𝗏𝖾 𝗐𝗁𝖺𝗍 𝗂𝗍 𝗍𝖺𝗄𝖾𝗌 𝗍𝗈 𝗁𝖺𝗇𝖽𝗅𝖾 𝗐𝗁𝖺𝗍𝖾𝗏𝖾𝗋 𝖼𝗈𝗆𝖾𝗌 𝗒𝗈𝗎𝗋 𝗐𝖺𝗒 𝗍𝗈𝖽𝖺𝗒. 𝖩𝗎𝗌𝗍 𝗍𝖺𝗄𝖾 𝖺 𝖽𝖾𝖾𝗉 𝖻𝗋𝖾𝖺𝗍𝗁 𝖺𝗇𝖽 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎 𝖺𝗋𝖾 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖾𝗇𝗈𝗎𝗀𝗁.");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        𝖨 𝗁𝖺𝗏𝖾 𝗌𝗈𝗆𝖾𝗍𝗁𝗂𝗇𝗀 𝗍𝗈 𝗍𝖾𝗅𝗅 𝗒𝗈𝗎, 𝗃𝗎𝗌𝗍 𝖼𝗅𝗂𝖼𝗄 𝗍𝗁𝖾 𝖻𝗎𝗍𝗍𝗈𝗇.🥰
      </Text>

      <TouchableOpacity style={styles.button} onPress={showMessage}>
        <Text style={styles.buttonText}>𝓒𝓵𝓲𝓬𝓴 𝓜𝓮!</Text>
      </TouchableOpacity>

      <Text style={styles.message}>{message}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffe4ec",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40,
    color: "#c94f7c",
  },

  button: {
    backgroundColor: "#ff9bb3",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    fontSize: 20,
    color: "white",
  },

  message: {
    marginTop: 40,
    fontSize: 18,
    textAlign: "center",
    color: "#8b3a62",
  },

});