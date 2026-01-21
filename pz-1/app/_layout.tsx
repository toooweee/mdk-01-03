import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name={'index'} options={{headerLeft: () => <></>}}/>
      <Stack.Screen name={'normal'} options={{ title: 'Normal'}}/>
      <Stack.Screen name={'dialog'}/>
    </Stack>
  );
}
