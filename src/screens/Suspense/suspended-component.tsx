import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { fetchData } from '../../utils/fetchData';

const SuspendedComponent = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const response = await fetchData();

        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndSetState();
  }, []);

  return <Text>{data}</Text>;
};

export default SuspendedComponent;
