import React, { createContext, useState, useEffect } from "react";

export const LojaContext = createContext();

export const LojaProvider = ({ children }) => {
  const [selectedLojaId, setSelectedLojaId] = useState(null);
  const [selectedLojaBairro, setSelectedLojaBairro] = useState(null);

  useEffect(() => {
    const savedLojaId = localStorage.getItem("selectedLojaId");
    if (savedLojaId) {
      setSelectedLojaId(savedLojaId);
    }

    const savedLojaBairro = localStorage.getItem("selectedLojaBairro");
    if (savedLojaBairro) {
      setSelectedLojaBairro(savedLojaBairro);
    }
  }, []);

  const saveLojaId = (id) => {
    setSelectedLojaId(id);
    localStorage.setItem("selectedLojaId", id);
  };

  const saveLojaBairro = (bairro) => {
    setSelectedLojaBairro(bairro);
    localStorage.setItem("selectedLojaBairro", bairro);
  };

  return (
    <LojaContext.Provider value={{ selectedLojaId, selectedLojaBairro, saveLojaId, saveLojaBairro }}>
      {children}
    </LojaContext.Provider>
  );
};
