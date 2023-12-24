import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

let n = 1;

function App(): React.JSX.Element {
  console.log(`Componente App renderizou x${n++}`);

  return <AppNavigator />;
}

export default App;
