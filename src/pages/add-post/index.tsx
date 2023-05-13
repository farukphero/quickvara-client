import React, { useContext } from "react";
import privateRoute from "@/routes/privateRoute";
import PostPopularAresBan from "@/components/OtherPages/PostPopularArea/PostPopularAreaBan/PostPopularAreaBan";
import PostPopularAreaEng from "@/components/OtherPages/PostPopularArea/PostPopularAreaEng/PostPopularAreaEng";
import PostAllCityEng from "@/components/OtherPages/PostAllCities/PostAllCitiesEng/PostAllCitiesEng";
import PostAllCityBan from "@/components/OtherPages/PostAllCities/PostAllCitiesBan/PostAllCitiesBan";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import PostAllDivisionEng from "@/components/OtherPages/PostAllDivision/PostAllDivisionEng/PostAllDivisionEng";
import PostAllDivisionBan from "@/components/OtherPages/PostAllDivision/PostAllDivisionBan/PostAllDivisionBan";
import PostDistrictsBan from "@/components/OtherPages/PostAllDivision/PostDistricts/PostDistrictsBan/PostDistrictsBan";
import PostDistrictsEng from "@/components/OtherPages/PostAllDivision/PostDistricts/PostDistrictsEng/PostDistrictsEng";
import PostAreaModalEng from "@/components/Home/Banner/Modal/PostAreaModalEng";

const AddPost = () => {
  // const [divisionLocation, setDivisionLocation] = useState<string[]>([]);
  // const [districtLocation, setDistrictLocation] = useState("");
  // const [rentType, setRentType] = useState("");
  const {
    postCityNameEng,
    postCityNameBan,
    postDivisionNameBan,
    postDivisionNameEng,
  }: any = useContext(PostStateContext);

  // const handleDivisionLocation = (e: any) => {
  //   const newLocations = [...divisionLocation];
  //   if (e.target.checked) {
  //     newLocations.push(e.target.name);
  //     setDivisionLocation(newLocations);
  //   } else if (!e.target.checked) {
  //     setDivisionLocation(newLocations.filter((lc) => lc !== e.target.name));
  //   }
  // };
  const lang = localStorage.getItem("lan");
  return (
  <section>
    <PostAreaModalEng></PostAreaModalEng>
      <div className="lg:w-6/12 md:w-10/12 md:mx-auto bg-white p-5 lg:p-14 lg:my-16">
      
      <div className={(postCityNameEng || postCityNameBan) && "hidden"}>
        {lang ? (
          <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-accent pl-2 text-black">
            Select your city.
          </h1>
        ) : (
          <h1 className="text-xl mb-5 border-l-4 border-b-4 border-accent text-black pl-2">
            শহর নির্বাচন করুন।
          </h1>
        )}
      </div>
      <div>
        <div className={lang && postCityNameBan && "hidden"}>
          {!postCityNameEng && lang && <PostAllCityEng></PostAllCityEng>}
        </div>
        <div className={!lang && postCityNameEng && "hidden"}>
          {!lang && !postCityNameBan && <PostAllCityBan></PostAllCityBan>}
        </div>

        {!postCityNameEng && postCityNameBan && !lang && (
          <PostPopularAresBan></PostPopularAresBan>
        )}
        {postCityNameEng && !postCityNameBan && lang && (
          <PostPopularAreaEng></PostPopularAreaEng>
        )}
        {lang && postCityNameBan && <PostPopularAreaEng></PostPopularAreaEng>}
        {!lang && postCityNameEng && <PostPopularAresBan></PostPopularAresBan>}
      </div>
      <div className="mt-10">
        <div
          className={(postDivisionNameBan || postDivisionNameEng) && "hidden"}
        >
          {lang ? (
            <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-accent pl-2 text-black">
              Select your Division.
            </h1>
          ) : (
            <h1 className="text-xl mb-5 border-l-4 border-b-4 border-accent text-black pl-2">
              বিভাগ নির্বাচন করুন।
            </h1>
          )}
        </div>
        <div className="lg:m-4">
          <div className={lang && postDivisionNameBan && "hidden"}>
            {lang && !postDivisionNameEng && (
              <PostAllDivisionEng></PostAllDivisionEng>
            )}
          </div>
          <div className={!lang && postDivisionNameEng && "hidden"}>
            {!lang && !postDivisionNameBan && (
              <PostAllDivisionBan></PostAllDivisionBan>
            )}
          </div>
          {/* {
            lang && postDivisionNameBan && <PostAllDivisionEng></PostAllDivisionEng>
          }
           {!lang && postDivisionNameEng && <PostAllDivisionBan></PostAllDivisionBan>} */}
        </div>
        {!lang && postDivisionNameBan && <PostDistrictsBan></PostDistrictsBan>}
        {lang && postDivisionNameEng && <PostDistrictsEng></PostDistrictsEng>}
        {!lang && postDivisionNameEng && !postDivisionNameBan && (
          <PostDistrictsBan></PostDistrictsBan>
        )}
        {lang && !postDivisionNameEng && postDivisionNameBan && (
          <PostDistrictsEng></PostDistrictsEng>
        )}
      </div>
      {/* {(!cityName || cityNameBan) && lang && <AllCity></AllCity>}
      {!cityNameBan && !lang && <AllCity></AllCity>}
      {(cityName && !cityNameBan) && lang && <AllAreas></AllAreas>}
      {(!cityName && cityNameBan) && !lang && <AllAreas></AllAreas>} */}
      {/* {!cityName && cityNameBan  && !lang && <AllAreas></AllAreas>} */}

      {/* <div className="lg:-ml-3 pb-16">
        {(!divisionNameEng || divisionNameBan) && lang && (
          <AllDivision></AllDivision>
        )}
        {(divisionNameEng || !divisionNameBan) && !lang && (
          <AllDivision></AllDivision>
        )}
        <div className="lg:-mt-20">
          {(divisionNameEng || divisionNameBan) && (
            <AllDistricts></AllDistricts>
          )}
        </div> */}
      {/* </div> */}
      {/* <h1 className="text-2xl font-bold pb-10">Select Your Location</h1>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="dhaka"
        />
        <span>Dhaka</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("dhaka") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                <li>
                  <Checkbox
                    onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Dhaka"
                  />{" "}
                  Dhaka
                </li>
                <li>
                  {" "}
                  <Checkbox   onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Faridpur"/> Faridpur
                </li>
                <li>
                  {" "}
                  <Checkbox
                  onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Gazipur"
                  />{" "}
                  Gazipur
                </li>
                <li>
                  {" "}
                  <Checkbox
                   onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Gopalganj"
                  />{" "}
                  Gopalganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jamalpur"/> Jamalpur
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Kishoreganj"/> Kishoreganj
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Madaripur"/> Madaripur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Manikganj"/> Manikganj
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Munshiganj"/> Munshiganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Narayanganj"/> Narayanganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Narsingdi"/> Narsingdi
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Netrokona"/> Netrokona
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rajbari"/> Rajbari
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Shariatpur"/> Shariatpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sherpur"/> Sherpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Tangail"/> Tangail
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="chittagong"
        />
        <span> Chittagong</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("chittagong") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
              
                <li>
                
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Chittagong"/> Chittagong
                </li>
                <li>
              
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Brahmanbaria"/> Brahmanbaria
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Comilla"/> Comilla
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Chandpur"/> Chandpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Cox's bazar"/> Coxs Bazar
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Feni"/> Feni
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Khagrachhari"/> Khagrachhari
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Lakshmipur"/> Lakshmipur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Noakhali"/> Noakhali
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rangamati"/> Rangamati
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Bandarban"/> Bandarban
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="rajshahi"
        />
        <span> Rajshahi</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("rajshahi") && (
            <div className="grid grid-cols-2 lg:gap-5">
              {" "}
              <ul>
                {" "}
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rajshahi"/> Rajshahi
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sirajganj"/> Sirajganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Pabna"/> Pabna
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Bogra"/> Bogra
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Chapainawabganj"/> Chapainawabganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Joypurhat"/> Joypurhat
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Naogaon"/> Naogaon
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Natore"/> Natore
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="sylhet"
        />
        <span> Sylhet</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("sylhet") && (
            <ul>
              <li>
                {" "}
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sylhet"/> Sylhet  
              </li>
              <li>
                {" "}
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Moulvibazar"/> Moulvibazar  
              </li>
              <li>
                {" "}
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Habiganj"/> Habiganj  
              </li>
              <li>
                {" "}
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sunamganj"/> Sunamganj 
              </li>
            </ul>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="barisal"
        />
        <span> Barisal</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("barisal") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                {" "}
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Barguna"/> Barguna
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Barishal"/> Barisal
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Bhola"/> Bhola
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jholokati"/> Jhalokati
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Patuakhali"/> Patuakhali
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Pirojpur"/> Pirojpur
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="khulna"
        />
        <span> Khulna</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("khulna") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Khulna"/> Khulna
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Bagerhat"/> Bagerhat
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Chuadanga"/> Chuadanga
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jessore"/> Jessore
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jhenaidah"/> Jhenaidah
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Kushtia"/> Kushtia
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Magura"/> Magura
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Meherpur"/> Meherpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Narail"/> Narail
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Satkhira"/> Satkhira
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="rangpur"
        />
        <span> Rangpur</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("rangpur") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rangpur"/> Rangpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Panchagarh"/> Panchagarh
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Thakurgaon"/> Thakurgaon
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Dinajpur"/> Dinajpur
                </li>
              </ul>
              <ul>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Kurigram"/> Kurigram
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Nilphamari"/> Nilphamari
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Lalmonirhat"/> Lalmonirhat
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Gaibandha"/> Gaibandha
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="mymensingh"
        />
        <span> Mymensingh</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("mymensingh") && (
            <ul>
              <li>
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Mymensingh"/> Mymensingh
              </li>
              <li>
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jamalpur"/> Jamalpur
              </li>
              <li>
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Netrokona"/> Netrokona
              </li>
              <li>
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sherpur"/> Sherpur
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
    }
    {
      districtLocation && !rentType && <RentType setRentType={setRentType}></RentType>
    }

    {
      rentType && <AddProduct rentType={rentType} districtLocation={districtLocation}></AddProduct>
    } */}
    </div>
  </section>
  );
};

export default privateRoute(AddPost);
