import { createStackNavigator ,createTabNavigator} from 'react-navigation';
import {Home} from './src/home/screens/home/home.screen';
import {Landing} from './src/auth/screens/landing/landing.screen';
import {Login} from './src/auth/screens/login/login.screen';
import {Register} from './src/auth/screens/register/register.screen';
import {ForgetPassword} from './src/auth/screens/forget-password/forget-password.screen';
import {ConfirmPassword} from './src/auth/screens/confirm-password/confirm-password.screen';
import {ResetPassword} from './src/auth/screens/reset-password/reset-password.screen';
import RepoPage from './src/repos/screens/repo-page/repo-page.screen';
import {ChooseLanguage} from './src/auth/screens/choose-language/choose-language.screen';


const TabNavigation = createTabNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },

  RepoPage:{
    screen: RepoPage,
    navigationOptions: {
      title: 'RepoPage',
    },
  },

});

const MainNavigator = createStackNavigator(
  {
    ChooseLanguage:{
      screen: ChooseLanguage,
      navigationOptions: {
        title: 'ChooseLanguage',
      },
    },

    Landing:{
      screen: Landing,
      navigationOptions: {
        title: 'Landing',
      },
    },

    TabNavigation:{
      screen: TabNavigation,
      navigationOptions: {
        title: 'TabNavigation',
      },
    },

  },
  {
    headerMode:'none',
  }
);


const SharedRoutes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register',
      },
    },
    ForgetPassword: {
      screen: ForgetPassword,
      navigationOptions: {
        title: 'ForgetPassword',
      },
    },
    ConfirmPassword: {
      screen: ConfirmPassword,
      navigationOptions: {
        title: 'ForgetPassword',
      },
    },
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions: {
        title: 'ForgetPassword',
      },
    },
  },
  {
    headerMode:'none',
  }
);

export const Routes = createStackNavigator(
  {
    MainNavigator:{
      screen: MainNavigator,
      navigationOptions: {
        title: 'MainNavigator',
      },
    },

    SharedRoutes:{
      screen: SharedRoutes,
      navigationOptions: {
        title: 'SharedRoutes',   
      },
    },
        
  },
  {
    headerMode:'none',
    mode: 'modal',
  }
);
