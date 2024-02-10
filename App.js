import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';

export default function App() {
  useDeviceContext(tw)

  return (
    <View style={tw`flex items-center justify-center bg-white dark:bg-neutral-900`}>
      <Text style={tw`bg-blue-100`}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
