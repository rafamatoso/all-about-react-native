import React, { Suspense, lazy } from 'react';
import { Loading, TScreens } from '../../design-system';

type CustomizedPromise = Promise<typeof import('./suspended-component')>;

const delayForDemo = async (promise: CustomizedPromise) => {
  await new Promise(resolve => {
    setTimeout(resolve, 5000);
  });
  return promise;
};

const LazyLoadedComponent = lazy(() =>
  delayForDemo(import('./suspended-component')),
);

const SuspenseScreen = () => {
  return (
    <TScreens title="SuspenseScreen Component">
      <Suspense fallback={<Loading />}>
        <LazyLoadedComponent />
      </Suspense>
    </TScreens>
  );
};

export default SuspenseScreen;
