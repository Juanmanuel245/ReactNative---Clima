import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from '@material-ui/core/AppBar';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
           <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  ecoCocina
                </Typography>
              </Toolbar>
            </AppBar>
        <Text>Hola!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
