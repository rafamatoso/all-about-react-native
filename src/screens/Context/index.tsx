import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/loading';
import { TScreens } from '../../design-system';

let n = 1;

const ContextScreen = () => {
  const context = useContext(GlobalContext);

  console.log(`Componente ContextScreen renderizou x${n++}`);

  useEffect(() => {
    setTimeout(() => {
      context.setLoadingScreen(false);
    }, 2000);
  }, []);

  return !context.loading.show && <TScreens title="ContextScreen Component" />;
};

export default ContextScreen;
