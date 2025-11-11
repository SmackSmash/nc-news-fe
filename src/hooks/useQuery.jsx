import { useState, useEffect } from 'react';

const useQuery = queryString => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(queryString);
        const json = await response.json();
        setIsLoading(false);
        setData(json);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    })();
  }, [queryString]);

  return [error, isLoading, data];
};

export default useQuery;
