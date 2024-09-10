import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("could not fetch the data");
        }
        const data = await response.json();
        setData(data);
        setisPending(false);
        setError(null);
      } catch (error) {
        setisPending(false);
        setError(error.message);
      }
    };

    fetchBlogs();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
