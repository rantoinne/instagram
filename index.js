/**
 * @format
 */

import App from './src/navigators/rootStack';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
