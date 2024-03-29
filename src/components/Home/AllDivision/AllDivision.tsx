import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext  } from "react";
import AllDivisionName from "./AllDivisionEng";
import Cookies from "js-cookie";

const AllDivision = () => {
  const { filterTypeCity, setFilterTypeDivision }: any = useContext(StateContext);
  const handlePrevious = () => {
    setFilterTypeDivision(false);
  };

  const lang = Cookies.get("lan");
  return (
    <div className="flex items-center mt-5 lg:mt-16 lg:ml-8 mx-7 md:mx-14 lg:mx-0">
     
      <div>
      {/* <h1
        onClick={handlePrevious}
        className="text-warning text-sm mb-5 lg:-ml-4 cursor-pointer hover:underline"
      >
        {!lang ? "Previous?" : "পূর্ববর্তী?"}
       
      </h1> */}
        {!lang ? (
          <h1
            className={
              "text-3xl mb-5 border-l-4 border-b-4 border-warning lg:-ml-4 pl-2"
                
            }
          >
            Select your division
          </h1>
        ) : (
          <h1
            className={
              "text-xl mb-5 border-l-4 border-b-4 border-warning lg:-ml-4 pl-2"
            }
          >
            {" "}
            বিভাগ নির্বাচন করুন
          </h1>
        )}
        <div>
          <AllDivisionName></AllDivisionName>
        </div>
      </div>
    </div>
  );
};

export default AllDivision;
