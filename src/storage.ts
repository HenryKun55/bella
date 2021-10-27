import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: string) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error: any) {
    console.log('AsyncStorage Error: ' + error.message);
  }
};

export const getItem = async (type: string) => {
  const item = await AsyncStorage.getItem(type);
  return item;
};
