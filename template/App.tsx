import React from 'react';
import {Provider} from 'react-redux';
import MyStack from './src/config/router/navigator';
import store, {persistor} from './src/presentation/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MyStack />
      </PersistGate>
    </Provider>
  );
};
export default App;
