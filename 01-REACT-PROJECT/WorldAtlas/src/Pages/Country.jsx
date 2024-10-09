import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/Layout/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  //State management for searching and Filtering...
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all"); //we give 'all' bcz we want to show all countries data bydefault vbefore choose any function...

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);

  if (isPending) return <Loader />;
  // console.log(search,filter);   //in this we got what user type in search box or what they select in Filter...

    const searchCountry=(country)=>{
      if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      }
      else
      {
        return country;
      }
    }

    const filterRegion=(country)=>{
      if(filter==="all") return country;
      else{
        return country.region===filter;
      }
    }

  const filterCountries=countries.filter((country)=>searchCountry(country) && filterRegion(country));

  return (
    <section className="country-section">
      {/* This get the data of Search and Filter... */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
       setFilter={setFilter}
       countries={countries}
       setCountries={setCountries}  //We provide the countries and setCountries propes data bcz they contain the all filterd data  on the basis of filtered data we provide the asc and dec functionality ...
      />

      <ul className="grid grid-four-cols">
        {/* countries-->filterCountries ...changed after the filter logic */}
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
