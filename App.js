import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import React from 'react';
import Welcome from './screens/Welcome';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      // Handle orientation changes if needed
    });

    return () => subscription?.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Welcome'
            options={{ headerShown: false}}
          >
            {({ navigation}) => (
              <Welcome 
                navigation={navigation}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name='Login'
            options={{ headerShown: false}}
          >
            {({ navigation}) => (
              <LoginScreen 
                navigation={navigation}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name='Signup'
            options={{ headerShown: false}}
          >
            {({ navigation}) => (
              <RegisterScreen 
                navigation={navigation}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name='Home'
            options={{ headerShown: false}}
          >
            {({ navigation}) => (
              <HomeScreen 
                navigation={navigation}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
