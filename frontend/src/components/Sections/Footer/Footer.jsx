import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import classes from "./Footer.module.css";
import Logo from "../../../assets/R.png";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
// import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
const Footer = () => {


  const submitHandler =()=>{
    Swal.fire(
      'Good job!',
      'Thanks for Subscribing!',
      'success'
    )    

    
  }
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-background"]}>
        <div className={classes["footer-content"]}>
          <div className={classes["footer-logo"]}>
            <img className={classes.logo} src={Logo} />
            <p className={classes.des}>Welcome to our travel haven! Embark on a journey of discovery with our travel website, where adventure meets convenience. Immerse yourself in a world of diverse destinations, from sun-kissed beaches to cultural wonders, carefully curated to cater to every travelers dream.</p>
          </div>
          <div className={classes["footer-column"]}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link className={classes.links} to="/home">Home</Link>
              </li>
              <li>
                <Link className={classes.links} to="/booking">Booking</Link>
              </li>
              <li>
                <Link className={classes.links} to="/home">Destination</Link>
              </li>
              <li>
                <Link className={classes.links} to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={classes["footer-column"]}>
            <h4>Contact Us</h4>
            <p className={classes.contactUs}>
              <FaPhone /> Phone: +961 70 452 996 <br />
              <FaEnvelope /> Email: Travelwithus@example.com <br />
              Connect with us!
            </p>
          </div>
          <div className={classes["footer-column"]}>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link className={classes.links} to="/vacation-packages">Vacation Packages</Link>
              </li>
              <li>
                <Link className={classes.links} to="/list-of-tours">List of Tours</Link>
              </li>
              <li>
                <Link className={classes.links} to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link className={classes.links} to="/travel-on-a-budget">Travel on a Budget</Link>
              </li>
            </ul>
          </div>
          <div className={classes["footer-column"]}>
            <h4>Follow Us</h4>
            <div className={classes["social-icons"]}>
              <FaFacebook  className={classes.fb}/>
              <FaTwitter className={classes.twitter}/>
              <FaInstagram className={classes.insta} />
              <FaGoogle className={classes.google}/>
            </div>
          </div>
          <div className={classes["subscribe"]}>
            <div className={classes['subscribe__container']}>
            <h4>Subscribe and be Updated</h4>
            <div className={classes.form}>
              <input
                type="text"
                placeholder="Please enter your email address"
              />
              <button onClick={submitHandler} className={classes["subscribe-btn"]}>Subscribe</button>
            </div>
          </div>
          </div>
        </div>
          <p className={classes.policyText}>Policy |  FAQ |  Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
