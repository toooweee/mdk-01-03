import {StyleSheet, View} from "react-native";
import {Link} from "expo-router";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={'/normal'} style={styles.link}>Открыть обычный экран</Link>
      <Link href={'/dialog'} style={styles.link}>Открыть экран с модальным окном</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    marginTop: 10,
    textDecorationLine: 'underline',
    fontSize: 18
  }
})

export default Index;