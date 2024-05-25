import React, { createContext, useState, useEffect } from "react";

export const LojaContext = createContext();

export const LojaProvider = ({ children }) => {
  const [selectedLojaId, setSelectedLojaId] = useState(null);

  useEffect(() => {
    // Carregar o ID da loja do Local Storage quando o componente for montado
    const savedLojaId = localStorage.getItem("selectedLojaId");
    if (savedLojaId) {
      setSelectedLojaId(savedLojaId);
    }
  }, []);

  const saveLojaId = (id) => {
    setSelectedLojaId(id);
    localStorage.setItem("selectedLojaId", id);
  };

  return (
    <LojaContext.Provider value={{ selectedLojaId, saveLojaId }}>
      {children}
    </LojaContext.Provider>
  );
};
