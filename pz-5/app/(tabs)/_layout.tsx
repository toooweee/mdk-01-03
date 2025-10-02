import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

export default function TabLayout() {
  useEffect(() => {
    async function requestPermissions() {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync({
          ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
          },
        });
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        return;
      }
    }

    requestPermissions();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: false,
        shouldSetBadge: false,
        shouldShowBanner: true,
        shouldShowList: true,
      }),
    });
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
      }}
      screenListeners={{
        tabPress: (e) => {
          const routeName = e.target!.split("-")[0];
          let title = "";
          switch (routeName) {
            case "index":
              title = "Главная";
              break;
            case "morning":
              title = "Утро";
              break;
            case "eat":
              title = "Кушать";
              break;
            case "lunch":
              title = "Играть";
              break;
            case "night":
              title = "Спать";
              break;
          }
          if (title) {
            Notifications.scheduleNotificationAsync({
              content: {
                title: `Переключено на ${title}`,
                body: `Теперь вы в разделе ${title.toLowerCase()}.`,
              },
              trigger: null,
            })
              .then(() => {})
              .catch((error) => {
                console.log("Ошибка уведомления:", error);
              });
          }
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="morning"
        options={{
          title: "Утро",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="sun-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="eat"
        options={{
          title: "Кушать",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cutlery" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lunch"
        options={{
          title: "Играть",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="gamepad" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="night"
        options={{
          title: "Спать",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="moon-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
