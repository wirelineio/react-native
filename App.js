import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { NativeRouter, Route, Link } from "react-router-native";

// import Scuttlebot from 'react-native-scuttlebot';
// https://github.com/ssbc/react-native-scuttlebot
// https://ssbc.github.io/docs/scuttlebot/tutorial.html
// Scuttlebot.start();

// TODO(burdon): Is there a better startup hook?
let reducer = (state=[], action) => {
  console.log('Reducer', state, action);
};

let store = createStore(reducer);

/**
 * Main App container.
 */
export default class App extends React.Component {

  constructor() {
    super(...arguments);

    console.log('Starting...');
  }

  // https://www.npmjs.com/package/react-router-native

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Text>Hello React World!</Text>
          </View>
        </NativeRouter>
      </Provider>
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

// https://stackoverflow.com/questions/38563679/react-redux-dispatch-action-on-app-load-init
// function onAppInit(dispatch) {
// <Route path="/" component={MainLayout} onEnter={onAppInit(store.dispatch)}>
