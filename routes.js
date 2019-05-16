import { createStackNavigator ,createTabNavigator} from 'react-navigation';
// import {Home} from './src/home/screens/home/home.screen';
// import RepoPage from './src/repos/screens/repo-page/repo-page.screen';
import {Landing} from './src/auth/screens/landing/landing.screen';
import {Login} from './src/auth/screens/login/login.screen';
import {Register} from './src/auth/screens/register/register.screen';
import {ForgetPassword} from './src/auth/screens/forget-password/forget-password.screen';
import {ConfirmPassword} from './src/auth/screens/confirm-password/confirm-password.screen';
import {ResetPassword} from './src/auth/screens/reset-password/reset-password.screen';
import {ChooseLanguage} from './src/auth/screens/choose-language/choose-language.screen';
import {MyPlans} from './src/home/screens/my-plans/my-plans.screen';
import {Explore} from './src/home/screens/explore/explore.screen';
import {Account} from './src/home/screens/account/account.screen';
import {AuthOptions} from './src/auth/screens/auth-options/auth-options.screen';

const TabNavigation = createTabNavigator({
  MyPlans:{
    screen: MyPlans,
    navigationOptions: {
      title: 'MyPlans',
    },
  },

  Explore:{
    screen: Explore,
    navigationOptions: {
      title: 'Explore',
    },
  },

  Account:{
    screen: Account,
    navigationOptions: {
      title: 'Account',
    },
  },

},
{
  tabBarOptions: {
    activeTintColor: '#2A78E4',
    inactiveTintColor: 'black',
    activeBackgroundColor:'#95BCF2',
    style:{
      borderTopColor: 'grey',
      backgroundColor:'#eee',  
    },
    labelStyle:{
      paddingTop: 20,
      fontSize: 13,
      height: 50,
      borderRightColor: 'black',
      borderLeftColor: 'black',
    },
    tabStyle:{
      paddingTop: 0,
      borderRightColor: 'black',
      borderLeftColor: 'black',

    }
    // activeTabStyle: {
    //   backgroundColor: 'green',
    //   borderBottomWidth: 4,
    //   borderColor: '#6C1D7C',
    //   paddingBottom: 18
    // }
  }
}
);

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

    AuthOptions:{
      screen: AuthOptions,
      navigationOptions: {
        title: 'AuthOptions',
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
