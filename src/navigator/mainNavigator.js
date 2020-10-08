import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen211903Navigator from '../features/BlankScreen211903/navigator';
import BlankScreen111901Navigator from '../features/BlankScreen111901/navigator';
import BlankScreen011900Navigator from '../features/BlankScreen011900/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen211903: { screen: BlankScreen211903Navigator },
BlankScreen111901: { screen: BlankScreen111901Navigator },
BlankScreen011900: { screen: BlankScreen011900Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
