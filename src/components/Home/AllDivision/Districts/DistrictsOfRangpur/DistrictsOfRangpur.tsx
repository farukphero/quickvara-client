import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";

const DistrictsOfRangpur = () => {
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
  };
  if (districtsName?.eng) {
    setFilterModal(true);
  }
  const lang = localStorage.getItem("lan");
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Rangpur", ban: "রংপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Rangpur</span>
            ) : (
              <span className="-mt-[2px]">রংপুর</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Panchagarh", ban: "পঞ্চগড়" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Panchagarh</span>
            ) : (
              <span className="-mt-[2px]">পঞ্চগড়</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Thakurgaon", ban: "ঠাকুরগাঁও" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Thakurgaon</span>
            ) : (
              <span className="-mt-[2px]">ঠাকুরগাঁও</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() => handleFilter({ eng: "Dinajpur", ban: "দিনাজপুর" })}
            />
            {!lang ? (
              <span className="-mt-[2px]">Dinajpur</span>
            ) : (
              <span className="-mt-[2px]">দিনাজপুর</span>
            )}
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Kurigram", ban: "কুড়িগ্রাম" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Kurigram</span>
            ) : (
              <span className="-mt-[2px]">কুড়িগ্রাম</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Nilphamari", ban: "নীলফামারী" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Nilphamari</span>
            ) : (
              <span className="-mt-[2px]">নীলফামারী</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Lalmonirhat", ban: "লালমনিরহাট" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Lalmonirhat</span>
            ) : (
              <span className="-mt-[2px]">লালমনিরহাট</span>
            )}
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              onClick={() =>
                handleFilter({ eng: "Gaibandha", ban: "গাইবান্ধা" })
              }
            />
            {!lang ? (
              <span className="-mt-[2px]">Gaibandha</span>
            ) : (
              <span className="-mt-[2px]">গাইবান্ধা</span>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DistrictsOfRangpur;
