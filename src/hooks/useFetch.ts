import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Record } from "../interfaces/RecordEntities";

const useFetch = <T extends Record>(path: string, options?: {}) => {
  const [records, setRecords] = useState<T[]>([]);
  const [version, setVersion] = useState(+new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  const url = `${process.env.REACT_APP_API}/${path}`;

  useEffect(() => {
    const callFetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get<T[]>(url, { params: options });
        setRecords(res.data);
      } catch (e) {
        setError(e as AxiosError);
      }
      setLoading(false);
    };

    callFetch();
  }, [url, options, version]);

  return { loading, records, error, setVersion };
};

export default useFetch;
