import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import { Image } from "expo-image";

const a = require("@/assets/images/a.jpg");
const b = require("@/assets/images/b.jpg");
const c = require("@/assets/images/c.png");
const d = require("@/assets/images/d.png");
const e = require("@/assets/images/e.jpg");

const Index = () => {
  return (
    <>
      <View style={styles.header}>
        <Image source={e} style={styles.headerAvatar} />
      </View>

      <View style={styles.container}>
        <View style={styles.bio}>
          <Text style={styles.bioText}>Имя</Text>
          <Text style={styles.bioText}>Возраст</Text>
          <Text style={styles.bioText}>Специализация</Text>
        </View>

        <View style={styles.tabs}>
          <Pressable style={[styles.tab, styles.tabsCurrent]}>
            <Text>Фото</Text>
          </Pressable>
          <Pressable style={styles.tab}>
            <Text>Проекты</Text>
          </Pressable>
          <Pressable style={styles.tab}>
            <Text>Достижения</Text>
          </Pressable>
          <Pressable style={styles.tab}>
            <Text>Цели</Text>
          </Pressable>
        </View>

        <View style={styles.picturesList}>
          <Image source={a} style={styles.picture} />
          <Image source={b} style={styles.picture} />
          <Image source={c} style={styles.picture} />
          <Image source={d} style={styles.picture} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 2 / 3,
    backgroundColor: "#7f22ff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerAvatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  container: {
    padding: 15,
  },
  bio: {},
  bioText: {
    fontSize: 18,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
  },
  tab: {
    paddingBlock: 5,
    paddingInline: 10,
    borderRadius: 10,
  },
  tabsText: {
    fontSize: 16,
  },
  tabsCurrent: {
    backgroundColor: "#ddd",
  },
  picturesList: {
    marginTop: 20,
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  picture: {
    width: 150,
    height: 150,
  },
});

export default Index;
