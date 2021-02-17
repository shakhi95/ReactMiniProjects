import { useState, useEffect } from "react";

export const useFetch = (url) => {
  //
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};
