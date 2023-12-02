import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ContriList } from "./ContriList";
export const Contries = () => {
  const [allContries, setAllContries] = useState([]);
  const [contryName, setContryName] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setContryName(e.target.search.value.toLowerCase());
  };
  const handleOnChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  const contriesByName = allContries.filter((contry) =>
    contry.name.common.toLowerCase().includes(contryName)
  );

  const contriesByRegion = contriesByName.filter((contry) => contry.region.includes(region));
    


  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => {
        setAllContries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="p-4 max-w-[1120px] mx-auto">
      <form onSubmit={handleSubmit} className="grid gap-8 md:flex md:justify-between mb-4 ">
        <div className="bg-white shadow-md shadow-black/5 flex gap-2 p-3 items-center rounded-md text-dark-gray dark:bg-dark-blue transition-colors">
          <button type="submit" className="outline-none">
            <IconSearch />
          </button>
          <input
            placeholder="Search for a country..."
            className="w-full outline-none dark:bg-dark-blue  dark:text-white transition-colors md:w-[340px]"
            type="text"
            name="search"
          />
        </div>
        <select
          onChange={handleOnChangeRegion}
          className="bg-white outline-none shadow-md shadow-black/5 rounded-md p-3 justify-self-start  dark:bg-dark-blue  dark:text-white transition-colors"
        >
          <option value="">All Continents</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </form>

      <span className=" font-bold  dark:text-white transition-colors">{contriesByRegion.length} Contries</span>

      <ContriList allContries={contriesByRegion} />
      {contriesByRegion.length === 0 && (
        <p className="text-center font-semibold text-2xl">No contries found</p>
      )}
    </section>
  );
};
