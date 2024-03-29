import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./RangDataBan";
import { option } from "./RangDataEng";
import { StateContext } from "@/Context/StateContext/StateContext";
import Cookies from "js-cookie";

const PopularAreaOfRangpur = () => {
  const { setHomePopularAreaName,setFilterValue,filterValue,  homePopularAreaName, setFilterModal }: any =useContext(StateContext); 

  const handleFilter=(v:any)=>{
     
    if(v?.name){

      if (v?.name === "eng") {
        const newName = {
          eng: v?.label,
          ban: v?.value,
        };
        setHomePopularAreaName(newName);
        setFilterValue({...filterValue, homePopularAreaName:newName})
        Cookies.set("area", JSON.stringify(newName),{ expires: 1 })
        setFilterModal(true);
      } else if (v?.name === "ban") {
        const newName = {
          eng: v?.value,
          ban: v?.label,
        };
        setHomePopularAreaName(newName);
        setFilterValue({...filterValue, homePopularAreaName:newName})
        Cookies.set("area", JSON.stringify(newName),{ expires: 1 })
        setFilterModal(true);
      }
    }
    else{
      setHomePopularAreaName(v)
      setFilterValue({...filterValue, homePopularAreaName:v})
      Cookies.set("area", JSON.stringify(v),{ expires: 1 })
    }
   
  }
  // if (homePopularAreaName?.name === "eng") {
  //   const newName = {
  //     eng: homePopularAreaName?.label,
  //     ban: homePopularAreaName?.value,
  //   };
  //   setHomePopularAreaName(newName);
  //   setFilterModal(true);
  // } else if (homePopularAreaName?.name === "ban") {
  //   const newName = {
  //     eng: homePopularAreaName?.value,
  //     ban: homePopularAreaName?.label,
  //   };
  //   setHomePopularAreaName(newName);
  //   setFilterModal(true);
  // }

  if (
    homePopularAreaName?.eng === "Shapla Chottor" ||
    homePopularAreaName?.eng === "Dhap" ||
    homePopularAreaName?.eng === "Lalbag Mor" ||
    homePopularAreaName?.eng === "Jahaj Company More" ||
    homePopularAreaName?.eng === "Pouro bazar" ||
    homePopularAreaName?.eng === "Vinno Jogot" ||
    homePopularAreaName?.eng === "College Para"
  ) {
    setFilterModal(true);
  }
  const lang = Cookies.get("lan");
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-gray-700 text-sm lg:text-base">
         
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Shapla Chottor",
                    ban: "শাপলা চত্বর",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Shapla Chottor</span>
              ) : (
                <span className="-mt-[2px]"> শাপলা চত্বর</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Dhap",
                    ban: "ধাপ",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Dhap</span>
              ) : (
                <span className="-mt-[2px]"> ধাপ</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Lalbag Mor",
                    ban: "লালবাগ মোড়",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Lalbag Mor</span>
              ) : (
                <span className="-mt-[2px]"> লালবাগ মোড়</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Jahaj Company More",
                    ban: "জাহাজ কোম্পানি মোড়",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> JahajCompanyMore </span>
              ) : (
                <span className="-mt-[2px] ">জাহাজ কোম্পানি </span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Pouro bazar",
                    ban: "পৌর বাজার",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Pouro bazar</span>
              ) : (
                <span className="-mt-[2px]"> পৌর বাজার</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "Vinno Jogot",
                    ban: "ভিন্ন জগত",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Vinno Jogot</span>
              ) : (
                <span className="-mt-[2px]"> ভিন্ন জগত</span>
              )}
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={() =>
                  handleFilter({
                    eng: "College Para",
                    ban: "কলেজপাড়া",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> College Para</span>
              ) : (
                <span className="-mt-[2px]"> কলেজপাড়া</span>
              )}
            </label>
          </li>
          <li
            className={
              homePopularAreaName?.eng === "Select others"
                ? "hidden"
                : "flex"
            }
          >
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-warning h-[18px] w-[19px]"
                onClick={(e: any) =>
                  handleFilter({
                    eng: "Select others",
                    ban: "অন্যান্য এলাকা",
                  })
                }
                name="Select-others"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Select others</span>
              ) : (
                <span className="-mt-[2px]"> অন্যান্য এলাকা</span>
              )}
            </label>
          </li>

          {!lang ? (
            <div>
              {homePopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="Search"
                    isSearchable
                    options={option}
                    onChange={handleFilter}
                    className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                  />
                </li>
              )}
            </div>
          ) : (
            <div>
              {homePopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="অনুসন্ধান"
                    isSearchable
                    options={options}
                    onChange={handleFilter}
                    className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                  />
                </li>
              )}
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default PopularAreaOfRangpur;
