import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store/store';

let n = 1;

function App(): React.JSX.Element {
  console.log(`Componente App renderizou x${n++}`);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
