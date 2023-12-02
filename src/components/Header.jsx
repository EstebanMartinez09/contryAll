import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToogleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="bg-white shadow-md mb-4 nonito-sans flex justify-between py-8 px-4 dark:bg-dark-blue dark:text-white transition-colors lg:px-16">
      <h1 className="font-bold">Where in the world?</h1>
      <button
        onClick={handleToogleTheme}
        className="flex font-semibold items-center  gap-2"
      >
        {isDark ? (
          <IconSun size={20} strokeWidth={1.6} />
        ) : (
          <IconMoon size={20} strokeWidth={1.6} />
        )}

        <p>{isDark ? "Light Mode" : "Dark Mode"}</p>
      </button>
    </header>
  );
};
