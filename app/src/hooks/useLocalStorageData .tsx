import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useLocalStorageData = <T,>(
  key: string,
  initialData: T[]
): [T[], Dispatch<SetStateAction<T[]>>] => {
  const [data, setData] = useState<T[]>(
    () => JSON.parse(localStorage.getItem(key) || "null") || initialData
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};

export default useLocalStorageData;
