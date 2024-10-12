import { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.createElement;
  console.log(element);

 useEffect(() => {
   // Selecciona el elemento raíz del documento (el <html>)
   const element = document.documentElement;

   localStorage.setItem("theme", theme ?? "light");

   // Aplica o remueve las clases dependiendo del tema
   if (theme === "dark") {
     element.classList.add("dark");
     element.classList.remove("light");
   } else {
     element.classList.add("light");
     element.classList.remove("dark");
   }
 }, [theme]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt=""
        className={`w-12 cursor-pointer`}
      />
    </div>
  );
};

export default DarkMode;
