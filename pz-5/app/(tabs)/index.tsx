import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getRandomTip } from "@/app/(tabs)/tips";

const Index = () => {
  const [tip, setTip] = useState("");

  useFocusEffect(
    useCallback(() => {
      setTip(getRandomTip());
    }, []),
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Привет! 🐶</Text>
      <Text style={styles.subtitle}>
        Добро пожаловать в уголок заботы о собаках!
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Как ухаживать за собакой</Text>
        <Text style={styles.sectionText}>
          1. **Кормление:** Выбирайте качественный корм, подходящий по возрасту
          и размеру собаки. Не перекармливайте.{"\n"}
          2. **Прогулки:** Минимум 2 раза в день, давайте собаке возможность
          активно двигаться.{"\n"}
          3. **Гигиена:** Регулярно чистите зубы, подстригайте когти, купайте по
          необходимости.{"\n"}
          4. **Игры и обучение:** Уделяйте время играм, тренировкам и
          социализации.{"\n"}
          5. **Здоровье:** Посещайте ветеринара для прививок и профилактики
          болезней.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Совет дня</Text>
        <Text style={styles.sectionText}>{tip}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    padding: 20,
    backgroundColor: "#fdf6e3",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ff6b6b",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2a2a2a",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
});

export default Index;
