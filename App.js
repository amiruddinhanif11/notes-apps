import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './src/theme/colors';
import { Ionicons } from '@expo/vector-icons';

import { store } from './src/redux/store';
import { Provider } from 'react-redux';

import NotesListScreen from './src/screens/NotesListScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer
          theme={{
            colors: {
              backgroundColor: colors.textColors.white,
            },
          }}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: colors.textColors.white,
              },
            }}>
            <Stack.Screen
              name="NotesListScreen"
              component={NotesListScreen}
              options={({ navigation }) => ({
                headerTitle: 'Notes',
                headerRight: () => (
                  <Ionicons
                    name="add-circle-sharp"
                    size={24}
                    color={colors.primary.blue}
                    onPress={() => navigation.navigate('AddNoteScreen')}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="AddNoteScreen"
              component={AddNoteScreen}
              options={({ navigation }) => ({
                headerTitle: 'Add New Note',
                headerLeft: () => (
                  <Ionicons
                    name="arrow-back-circle"
                    size={24}
                    color={colors.primary.blue}
                    onPress={() => navigation.goBack()}
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
