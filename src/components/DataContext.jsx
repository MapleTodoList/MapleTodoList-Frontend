// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [data, setData] = useState("");

  const setDataValue = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, setDataValue }}>
      {children}
    </DataContext.Provider>
  );
}
