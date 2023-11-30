import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ContriList } from "./ContriList";
export const Contries = () => {
  const [allContries, setAllContries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => {
        setAllContries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="p-4">
      <form className="grid gap-8">
        <div className="bg-white shadow-md shadow-black/5 flex gap-2 p-3 items-center rounded-md text-dark-gray">
          <button>
            <IconSearch />
          </button>
          <input
            placeholder="Search for a country..."
            className="w-full outline-none"
            type="text"
          />
        </div>
        <select className="bg-white outline-none shadow-md shadow-black/5 rounded-md p-3 justify-self-start">
          <option value="">All Continents</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
          <option value="">Antartic</option>
        </select>
      </form>
      <ContriList allContries={allContries} />
    </section>
  );
};
