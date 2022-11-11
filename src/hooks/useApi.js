import { useEffect, useState } from "react";

function useApi(url) {
  const [response, setResponse] = useState({
    data: null,
    loader: false,
    error: ""
  })

  const apiRequest = () => {
    setResponse({
      data: null,
      loader: true,
      error: ""
    })
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResponse({
          data,
          loader: false,
          error: ""
        })
      })
      .catch(() => {
        setResponse({
          data: null,
          loader: false,
          error: "Unable to fetch data...."
        })
      })
  };

  useEffect(() => {
    apiRequest();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {data, loader, error} = response;
  
  return {
    data,
    loader,
    error,
    refetch: apiRequest,
  };
}

export default useApi;
