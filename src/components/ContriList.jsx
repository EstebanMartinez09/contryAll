export const ContriList = ({ allContries }) => {
  return (
    <section className=" grid gap-10 place-content-center grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] p-8">
      {allContries.map((contry) => {
        return (
          <article
            className="bg-white shadow-md shadow-black/5 rounded-md overflow-hidden  dark:bg-dark-blue  dark:text-white"
            key={contry.name.common}
          >
            <header className="shadow-md shadow-black/5 h-[160px]">
              <img className="h-full w-full object-cover"
                src={contry.flags.svg}
                alt={`bandera de ${contry.name.common}`}
              />
            </header>
            <div className="p-8">
              <h2 className="font-bold text-xl mb-4">{contry.name.common}</h2>
              <ul>
                <li>
                  <span className="font-semibold">Population:</span> {contry.population.toLocaleString()}
                </li>
                <li>
                  <span className="font-semibold">Region:</span> {contry.region}
                </li>
                <li>
                  <span className="font-semibold">Capital:</span>{" "}
                  {contry.capital ? contry.capital.join(", ") : "No capital"}
                </li>
              </ul>
            </div>
          </article>
        );
      })}
    </section>
  );
};
