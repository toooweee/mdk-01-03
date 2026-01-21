import { StyleSheet, View, Text, Pressable } from "react-native";
import {useEffect, useState} from "react";
import Dialog from "@/app/dialog";
import {Link} from "expo-router";

export default function Index() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    console.log('On create')
  }, [])

  return (
    <View style={styles.container}>
      <Link href={'/normal'}>
        Открыть обычный экран
      </Link>

      <Pressable onPress={() => setIsDialogVisible(true)}>
        <Text>Открыть модалку</Text>
      </Pressable>

      <Dialog
        visible={isDialogVisible}
        onClose={() => setIsDialogVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#4da6ff",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
