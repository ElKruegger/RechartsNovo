import { useState, useEffect } from 'react';
import api from '../API/Api';

export default function useApi(endpoint, params) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  useEffect(() => {
    const fetchData = async () => {
      
      try {
        await delay(5000);
        const response = await api.get(endpoint, { params });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, params]);

  return { data, error, loading };
}