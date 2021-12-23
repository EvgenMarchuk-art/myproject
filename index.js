import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Gradient from './src/component/gradient/Gradient';

const HomeScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>

      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
            },
          })
        }
      />

      <Button
        title="Push Gradient Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Gradient',
            },
          })
        }
      />
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
};

const GradientScreen = () => {
  return (
    <View style={styles.root }>
      <Gradient>
        <Text>Ya zdes</Text>
      </Gradient>
    </View>
  );
};

GradientScreen.options = {
  topBar: {
    title: {
      text: 'Gradient',
    },
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Gradient', () => GradientScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings',
                  },
                },
              ],
            },
          },

        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
