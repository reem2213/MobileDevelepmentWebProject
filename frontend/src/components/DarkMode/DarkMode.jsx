import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";
import classes from "./DarkMode.module.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className={classes["dark_mode"]}>
      <input
        className={classes["dark_mode_input"]}
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
{/* <i className="fas fa-toggle-on"></i> */}
      <label className={classes["dark_mode_label"]}>
        <img className={classes["sun"]} src={Sun} />
        <img src={Moon} />
      </label>

    </div>
  );
};
export default DarkMode;
