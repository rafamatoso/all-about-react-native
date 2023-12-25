import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TScreens } from '../../design-system';
import { loading as loadingCreator } from '../../redux/features/loading/loadingSlice';

// let n = 1;

const HomeScreen = () => {
  // console.log(`Componente HomeScreen com Redux renderizou x${n++}`);

  const loading = useSelector((state: any) => state.loading.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadingCreator());
    }, 3000);
  }, [dispatch]);

  return (
    loading && (
      <TScreens>
        <Text>HomeScreen Component</Text>
      </TScreens>
    )
  );
};

export default HomeScreen;
