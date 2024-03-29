import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import AllCityEng from "./AllCityEng";
import Cookies from "js-cookie";

const AllCity = () => {
  const { setFilterTypeCity,filterValue, setFilterValue }: any = useContext(StateContext);
  const handlePrevious = () => {
    setFilterTypeCity(false);
  };
  const lang = Cookies.get("lan");
  return (
    <section className="mx-7 md:mx-14 lg:mx-0">
      {/* <h1
        onClick={handlePrevious}
        className="text-warning text-sm mb-5 cursor-pointer hover:underline"
      >
        {!lang ? "Previous?" : "পূর্ববর্তী?"}
       
      </h1> */}
      {!lang ? (
        <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700">
          Select your city.
        </h1>
      ) : (
        <h1 className="text-xl mb-5 border-l-4 border-b-4 border-warning text-gray-700 pl-2">
          শহর নির্বাচন করুন।
        </h1>
      )}

      <AllCityEng></AllCityEng>
    </section>
  );
};

export default AllCity;
