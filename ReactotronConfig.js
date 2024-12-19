import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
console.tron = Reactotron;
const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure() // controls connection & communication settings
  .use(reactotronRedux(), networking())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

export default reactotron;
