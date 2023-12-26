import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TScreens } from '../../design-system';
import { loading as loadingCreator } from '../../redux/features/loading/loadingSlice';

let n = 1;

const ReduxScreen = () => {
  const loading = useSelector((state: any) => state.loading.value);
  const dispatch = useDispatch();

  console.log(`Componente ReduxScreen renderizou x${n++}`);

  useEffect(() => {
    loading &&
      setTimeout(() => {
        dispatch(loadingCreator());
      }, 2000);
  }, [dispatch, loading]);

  return <TScreens title="ReduxScreen Component" loading={loading} />;
};

export default ReduxScreen;
