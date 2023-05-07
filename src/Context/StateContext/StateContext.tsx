import React, { createContext, useState } from "react";

export const StateContext = createContext({});

const StateInfo = ({ children }: any) => {
  const [tokenValidation, setTokenValidation] = useState("");
  const [filterTypeCity, setFilterTypeCity] = useState(false)
  const [filterTypeDivision, setFilterTypeDivision] = useState(false)
  const [cityName, setCityName] = useState("")
  const [cityNameBan, setCityNameBan] = useState("")
  const [previous, setPrevious] = useState("");
  const [language, setLanguage] = useState(false);
  const info = {
    tokenValidation,
    setTokenValidation,
    filterTypeCity,
    setFilterTypeCity,
    filterTypeDivision,
    setFilterTypeDivision,
    setCityName,
    cityName,
    setPrevious,
    previous,
    setLanguage,
    language,
    setCityNameBan,
    cityNameBan
  };
  //  console.log(banglaStyle)
  return <StateContext.Provider value={info}>{children}</StateContext.Provider>;
};

export default StateInfo;
