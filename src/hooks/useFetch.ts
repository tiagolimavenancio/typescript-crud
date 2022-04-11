import { useState, useEffect } from "react";
import axios from "axios";
import { Record } from "../interfaces/RecordEntities";

const useFetch = <T extends Record>(path: string, options?: {}) => {
  const [records, setRecords] = useState<T[]>([]);
  const [version, setVersion] = useState(+new Date());

  const url = `${process.env.REACT_APP_API}/${path}`;

  useEffect(() => {
    const callFetch = async () => {
      const res = await axios.get<T[]>(url, { params: options });
      setRecords(res.data);
    };

    callFetch();
  }, [url, options, version]);

  return { records, setVersion };
};

export default useFetch;
