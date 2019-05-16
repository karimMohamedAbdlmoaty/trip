import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Routes} from './routes';
import { Provider } from 'react-redux';
import store from './src/store';
import {Account} from './src/home/screens/account/account.screen';
// import RepoPage from './src/repos/screens/repo-page/repo-page.screen';


class App extends Component {
  render() {
    return (
      <Provider store={store} style={{flex: 1}} >
        <Routes/>
        {/* <Account/> */}
      </Provider>

    );
  }
}



AppRegistry.registerComponent(appName, () => App);