import React from "react";

export default function useStorage(key, defaultValue=null) {
  const [data, setData] = React.useState(defaultValue)

  React.useEffect(() => {
    const storedData = localStorage.getItem(key)
    if(storedData){
      setData(JSON.parse(storedData))
    }
  }, [])
  
  const updateStoredData = React.useCallback((newData) => {
    localStorage.setItem(key, JSON.stringify(newData))
    setData(newData)
  }, [])

  return [data, updateStoredData]
}

