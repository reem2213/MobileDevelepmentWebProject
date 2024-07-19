import classes from "./ContactUs.module.css";
import Header from "../Header/Header";
import Pic from '../../assets/earth-airplane.jpeg';
import Bg from "../../assets/maldives.jpeg";
import Bg2 from "../../assets/OIP.jpeg";
import Faq from "../FAQ/Faq";
import Footer from "../Sections/Footer/Footer";
import Swal from 'sweetalert2';

const ContactUs = () => {

  const submitHandler=()=>{
    Swal.fire(
      'Good job!',
      'Email Sent!.',
      'success'
    )
  }
  return (
    <>
      <img src={Bg2} className={classes.image} alt="Image" />
      <Header />
      <p className={classes.title}>READY FOR UNFORGATABLE TRAVEL.</p>
      <p className={classes.title2}>CONTACT US NOW!</p>

      <div className={classes.divv}>
      <h1 className={classes['get-in-touch']}>GET IN TOUCH</h1>
        <form
          action="https://formspree.io/f/xnqyrgna"
          method="POST"
          className={classes.formm}
        >
          <input
            className={classes.input}
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className={classes.input}
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
          <input
            className={classes.input}
            type="type"
            id="phone"
            pattern=".{,8}"
            name="phone"
            placeholder="Phone no."
            required
          />
          <input
            className={classes.input}
            id="message"
            rows="5"
            name="message"
            placeholder="how can we help you?"
            required/>
         
          <button className={classes['submit-button']} type="submit" onClick={submitHandler}>Send</button>
        </form>
      </div>
      <img src={Bg} className={classes.bg} />
      <h1 className={classes.faqWord}>FAQ</h1>
      <div className={classes.faqSection}>
      
      <img src={Pic} className={classes.pic}/>
      <Faq/>
      </div>
      <Footer/>
      
    </>
  );
};
export default ContactUs;
