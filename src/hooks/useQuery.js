import { useCallback } from 'react';
import { useState, useEffect } from 'react';

const useQuery = (queryString, method = 'GET') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(queryString, { method });
      const json = await response.json();
      if (json.error) throw new Error(json.error.errorMessage);
      setIsLoading(false);
      setData(json);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }, [queryString, method]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { error, isLoading, data, setData, refetch: fetchData };
};

export default useQuery;
