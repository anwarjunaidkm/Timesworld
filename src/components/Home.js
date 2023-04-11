import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fb, google, linked, men, tw } from './image/image';
import {FaBars} from 'react-icons/fa'
import { countriesApi } from '../store/slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const dispatch =useDispatch()
    const { List } = useSelector((state) => state.user);
    const [data,SetData]=useState(List)
    const [selectedRegion, setSelectedRegion] = useState(null);


    console.log({data});
    useEffect(() => {
        dispatch(countriesApi());
       
      }, [dispatch]);

   
      useEffect(() => {
        // Filter countries by selected region or show all countries if no region is selected
        const filteredCountries = selectedRegion ? List.filter(country => country.region === selectedRegion) : List;
        // Update the data state with filtered countries
        SetData(filteredCountries);
      }, [selectedRegion, List]);
    
      const handleRegionClick = (region) => {
        if (region === "All") {
          // If "All" option is selected, reset the selected region and show all countries
          setSelectedRegion(null);
          SetData(List); // Reset the data to the original list of countries
        } else {
          // Update the selected region state and filter the countries by region
          setSelectedRegion(region);
          const filteredCountries = List.filter(country => country.region === region);
          SetData(filteredCountries); // Update the data state with filtered countries
        }
      };
      console.log("region",selectedRegion);



  return (
    <>
      <div className=" w-full h-screen   ">
        <div className="max-w-[1000px] mx-auto px-8 flex    flex-col  h-full py-3">
          <div className="flex justify-between py-4 p-2">
            <h3 className="font-bold text-[#3D3D3D] text-[20px]">Country</h3>

            
        <div className='hidden md:block'>

            <ul className="flex gap-4 justify-center items-center text-[#3D3D3D] text-[16px] cursor-pointer  ">
              <li className=" hover:text-[#8B8B8B]" onClick={() => handleRegionClick('All')} >All</li>
              <li className=" hover:text-[#8B8B8B]"onClick={() => handleRegionClick('Asia')}>Asia</li>
              <li className=" hover:text-[#8B8B8B]" onClick={() => handleRegionClick('Europe')}>Europe</li>
            </ul>
        </div>

            <div className='md:hidden'>
                  <FaBars />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            {/* //single grid */}

            {
                data?.map((item)=>{
                   
                    return(
                        
            <div className="border-solid border-2 border-[#3E3E3E]">
            <div className="flex p-4">
              <img className="w-[127px] h-[96px]" src={item?.flag} alt="" />
              <div className="w-full p-3 px-4 ">
                <h1 className="text-[#3E3E3E] font-semibold">{item?.name}</h1>
                <p className="text-[#6F6F6F]">{item?.region}</p>
              </div>
            </div>
          </div>

                    )
                })
            }


            
           
           

            {/* //-----end--- */}
          </div>

          {/* //---foooter--- */}


          
        <div className='flex justify-center '>
                <div className=" flex flex-col items-center sm:items-center sm:justify-around text-[#3D3D3D] font-bold text-[10px]  py-4 ">
                <div className='flex justify-center'>
                    <img className="md:m-2 m-2" src={fb} alt="" />
                    <img className="md:m-2 m-2" src={google} alt="" />
                    <img className="md:m-2 m-2" src={tw} alt="" />
                    <img className="md:m-2 m-2" src={linked} alt="" />
                </div>
                <p className='pt-3 pb-2'>Example@email.com</p>
                <p className=''>Copyright © 2020 Anwarjunaid. All rights reserved.</p>

                </div>
          </div>  

          
           
          
        </div>
      </div>
    </>
  );
}

export default Home