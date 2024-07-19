import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/R.png";
import Logout from '../../assets/logout.png';
import Phone from '../../assets/ringer.png'
import Email from '../../assets/email.png'
import Location from '../../assets/loc.png';
// import { useState,useEffect } from "react";
const Header = () => {
  
  
 // We Are Available 24/7.Feel free to contact and reach us !! 
  return (
    <>
        <img src={Email} width={30} height={30} className={classes.email}/>

    <div className={classes.info} id="info">
            <p className={classes.infos}>Email :Travelwithus@gmail.com</p>
            <img src={Phone} className={classes.phone} width={30} height={30}/>

            <p className={classes.infos}>Phone Number: +961 70 452 996</p>
            <img src={Location} className={classes.loc} width={30} height={30}/>

            <p className={classes.infos}>Lebanon, Beirut</p>
            {/* <button onClick={toggleDarkMode} className={classes.darkModeToggle}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
          </div>
    <div className={classes.div}>
      
      <header className={classes.header}>
        <nav className={classes.nav}>
          <img src={Logo} className={classes.logo} />
          <ul className={classes["nav__links"]}>
            <Link to="/home" className={classes.link}>
              HOME
            </Link>
            <Link to="/package" className={classes.link}>
              PACKAGES AND GALLERY
            </Link>
            <Link to="/booking" className={classes.link}>
              BOOKING
            </Link>
      
            <Link to="/contactUs" className={classes.link}>
              CONTACT US
            </Link>
            <Link to='/'><img src={Logout} width={50} height={50}/></Link>
          </ul>
        </nav>
      </header>
    </div>
    </>
  );
};
export default Header;
