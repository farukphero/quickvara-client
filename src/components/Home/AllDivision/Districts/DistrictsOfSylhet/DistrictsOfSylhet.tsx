import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import Cookies from "js-cookie";

const DistrictsOfSylhet = () => {
  const {
    setDistrictsName,
    districtsName,
    setFilterValue,
    filterValue,
    setFilterModal,
  }: any = useContext(StateContext);
  const handleFilter = (v: any) => {
    setDistrictsName(v);
    setFilterValue({ ...filterValue, districtsName: v });
    Cookies.set("district", JSON.stringify(v),{ expires: 1 })
  };
  if (districtsName?.eng) {
    setFilterModal(true);
  }
  const lang = Cookies.get("lan");
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Sylhet", ban: "সিলেট" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Sylhet</span>
            ) : (
              <span className="-mt-[2px]">সিলেট</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Moulvibazar", ban: "মৌলভীবাজার" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Moulvibazar</span>
            ) : (
              <span className="-mt-[2px]">মৌলভীবাজার</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Habiganj", ban: "হবিগঞ্জ" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Habiganj</span>
            ) : (
              <span className="-mt-[2px]">হবিগঞ্জ</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Sunamganj", ban: "সুনামগঞ্জ" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Sunamganj</span>
            ) : (
              <span className="-mt-[2px]">সুনামগঞ্জ</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfSylhet;
