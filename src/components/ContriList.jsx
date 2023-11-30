export const ContriList = ({ allContries }) => {
  return (
    <section className=" grid gap-10 place-content-center grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] p-8">
      {allContries.map((contry) => {
        return (
          <article
            className="bg-white shadow-md shadow-black/5 rounded-md overflow-hidden"
            key={contry.name.common}
          >
            <header className="">
              <img
                src={contry.flags.svg}
                alt={`bandera de ${contry.name.common}`}
              />
            </header>
            <div className="p-8">
              <h2 className="font-bold text-xl mb-4">{contry.name.common}</h2>
              <ul>
                <li>
                  <span className="font-semibold">Population:</span> {contry.population}
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
