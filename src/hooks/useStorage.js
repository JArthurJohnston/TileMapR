import React from "react";
import Storage from "../data/Storage";

export default function useStorage(key, defaultValue=null) {
  const [data, setData] = React.useState(defaultValue)

  React.useEffect(() => {
    const storedData = Storage.get(key)
    if(storedData){
      setData(storedData)
    }
  }, [])
  
  const updateStoredData = React.useCallback((newData) => {
    Storage.save(key, newData)
    setData(newData)
  }, [])

  return [data, updateStoredData]
}

