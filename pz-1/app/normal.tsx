import React, {useEffect} from 'react';
import {Text, View} from "react-native";

const Normal = () => {
  useEffect(() => {
    console.log('Создание нормального окна')
  }, [])

  return (
    <View>
      <Text>Normal a screen</Text>
    </View>
  );
};

export default Normal;