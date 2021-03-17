/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Tab from './src/navegacao/Tab'

AppRegistry.registerComponent(appName, () => Tab);

//import App from './App';
//import Header from './src/components/Header'
//import Register from './src/screens/Register'
//import Login from './src/screens/Login'


// import storeConfig from './src/store/storeConfig'
// import axios from 'axios'
// import { Provider } from 'react-redux';
// axios.defaults.baseURL = 'https://pescapeixe-77777-default-rtdb.firebaseio.com/'

// const store = storeConfig()
// const Redux = () => {
//     <Provider store = {store}>
//         <Tab />
//     </Provider>
// }