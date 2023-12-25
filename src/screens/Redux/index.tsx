import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TScreens } from '../../design-system';
import { loading as loadingCreator } from '../../redux/features/loading/loadingSlice';

// let n = 1;

const ReduxScreen = () => {
  // console.log(`Componente ReduxScreen renderizou x${n++}`);

  const loading = useSelector((state: any) => state.loading.value);
  const dispatch = useDispatch();

  useEffect(() => {
    loading &&
      setTimeout(() => {
        dispatch(loadingCreator());
      }, 2000);
  }, [dispatch, loading]);

  return !loading && <TScreens title="ReduxScreen Component" />;
};

export default ReduxScreen;
