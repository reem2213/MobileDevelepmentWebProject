import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import P1 from "../../assets/san-miguel.jpeg";
import P2 from "../../assets/burj-khalife.jpeg";
import P3 from "../../assets/kyoto.jpg";
import T1 from "../../assets/trending-1.jpg";
import T2 from "../../assets/trending-2.jpg";
import T3 from "../../assets/trending-3.jpg";
import Bg from "../../assets/bg.jpg";
import classes from "./Home.module.css";
import Bg2 from "../../assets/OIP.jpeg";
import Bg4 from "../../assets/dubai.jpg";
import Bg6 from "../../assets/korea.jpeg";
import Bg5 from "../../assets/bg7.jpeg";
import Bg8 from "../../assets/bg8.jpg";
import Bg9 from "../../assets/maldives.jpeg";
import Bg10 from "../../assets/naturee.jpeg";
import Bg11 from "../../assets/nature.jpeg";
import Header from "../Header/Header";
import Destination from "../Sections/Destination/Destination";
import Trending from "../Sections/Trending/Trending";
import Sellers from "../Sections/Sellers/Sellers";
import S1 from "../../assets/train.jpeg";
import S2 from "../../assets/natureeee.jpeg";
import S3 from "../../assets/tokyo.jpg";
import Video from "../Sections/Video/Video";
import Feedback from "../Sections/Feedback/Feedback";
import C1 from "../../assets/client-1.jpg";
import C2 from "../../assets/client-2.jpg";
import C3 from "../../assets/client-3.jpg";
import Footer from "../Sections/Footer/Footer";

const Home = () => {
  const imageUrls = [Bg, Bg4, Bg5, Bg6, Bg8, Bg9, Bg10, Bg11];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const body = document.body;
    const info=document.getElementById('info');
    const sectionTitle=document.getElementById('sectionTitle');
    const sectionSeller=document.getElementById('sectionSeller');
    const sectionFeedback=document.getElementById('sectionFeedback');
    const sectionTrending=document.getElementById('sectionTrending');
    const booknow=document.getElementById('book-now');

        if (isDarkMode) {
      body.style.backgroundColor = "black";
      body.style.color = "#ffffff";
      info.style.backgroundColor = "#132a43";
      booknow.style.backgroundColor = "#132a43";

      sectionTitle.style.color='#ffffff';
      sectionSeller.style.color='#ffffff';
      sectionFeedback.style.color='#ffffff';
      sectionTrending.style.color='#ffffff';
      // trendingcard.style.backgroundColor='#1a1a1a'
    } else {
      body.style.backgroundColor = ""; 
      body.style.color = "";
      info.style.backgroundColor = "";
      sectionTitle.style.color='';
      sectionSeller.style.color='';
      sectionFeedback.style.color='';
      sectionTrending.style.color='';
      // trendingcard.style.backgroundColor=''
      booknow.style.backgroundColor = "";

    }

  }, [isDarkMode]);

  return (
    <>
      <div>
        <img src={Bg2} className={classes.image} alt="Image" />
        
        <Header />
        <p className={classes.title2}>JOURNEY TO EXPLORE THE WORLD!</p>
        <p className={classes.title}>READY FOR UNFORGATABLE TRAVEL.</p>
        <Link to="/booking">
          <button className={classes["book-now"]} id="book-now">BOOK NOW</button>
        </Link>

        <div
          className={classes.container}
          style={{ backgroundImage: `url(${imageUrls[currentImage]})` }}
        ></div>
      </div>

      <div className={classes.sectionContainers}>
        <section className={classes["trending"]}>
          <h2 className={classes.sectionTrending} id="sectionTrending">TRENDING 2023</h2>
          <button onClick={toggleDarkMode} className={classes.darkModeToggle}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <div className={classes.trendings} id="trendings">
            <Trending
              image={T1}
              subtitle="Hiking Our | Stoke On Trent"
              cardTitle="Mountain Hiking Tour"
              price="500$"
              rate="(4.5)"
              day="7 days"
              id='trending-card'
            />
            <Trending
              image={T2}
              subtitle="Adventure Journey | Group Tour"
              cardTitle="Train Tour Skyline"
              price="650$"
              rate="(4.8)"
              day="3 days"
              id='trending-card'

            />
            <Trending
              image={T3}
              country="DUBAI"
              subtitle="Scenic Beauty | Adrenaline Rush"
              cardTitle="Wild Forest Life"
              price="745$"
              rate="(4.2)"
              day="5 days"
              id='trending-card'
            />
          </div>
        </section>

        <section className={classes["popular"]} id="destination">
          <p className={classes["section-subtitle"]}>UNCOVER</p>

          <h2 className={classes.sectionTitle} id="sectionTitle">POPULAR DESTINATION</h2>
          <p className={classes.p}>
            Popular destinations are sought-after travel locations that
            captivate travelers with their unique charm and diverse attractions,
            often boasting a blend of cultural richness, natural beauty, and
            memorable experiences. These well-loved spots appeal to a broad
            spectrum of visitors, offering a glimpse into the essence and allure
            of a particular region or country.
          </p>
          <div className={classes.destinations}>
            <Destination
              image={P1}
              country="ITALY"
              cardText="Italy's charming blend of history, modern allure, and Mediterranean ambiance"
              cardTitle="SAN MIGUEL"
            />
            <Destination
              image={P2}
              country="DUBAI"
              cardText="World's tallest building, iconic skyline views in Dubai.."
              cardTitle="BURJ KHALIFA"
            />
            <Destination
              image={P3}
              country="JAPAN"
              cardText="Kyoto's temples stand as timeless symbols of cultural richness and spiritual serenity."
              cardTitle="KYOTO TEMPLE"
            />
          </div>
        </section>
        <section className={classes.seller}>
          <h2 className={classes.sectionSeller} id="sectionSeller">BEST SELLER</h2>

          <div className={classes.sellers}>
            <Sellers
              image={S1}
              badge="30%"
              dn="9 Days| 8 Nights"
              price="456$"
              details="Trains Tour Skyline"
              parag="Embark on a scenic railway adventure with Trains Tour Skyline"
            />
            <Sellers
              image={S2}
              badge="25%"
              dn="7 Days| 8 Nights"
              price="780$"
              details="Sea Nature View"
              parag="Where the ocean's beauty meets your soul's serenity"
            />
            <Sellers
              image={S3}
              badge="10%"
              dn="5 Days| 4 Nights"
              price="456$"
              details="Tokyo Market Ptr"
              parag="Where Tradition Meets Modern Marvels in Every Aisle"
            />
          </div>
        </section>
        <Video />
        <section className={classes.feedback}>
          <h2 className={classes.sectionFeedback} id="sectionFeedback">CLIENTS FEEDBACK</h2>

          <div className={classes.feedbacks}>
            <Feedback
              parag="I had the most incredible experience using this tour and travel
            website. From booking my flights and accommodations to discovering
            unique local activities, everything was seamless and well-organized.
            It made my trip stress-free and unforgettable. I cant wait to plan
            my next adventure with them!"
              image={C1}
              name="Mike Henderson"
              position="Business Manager & CEO"
            />
            <Feedback
              parag="As a frequent traveler, I have used various tour and travel websites, but this one stands out for its attention to detail and personalized recommendations. The itineraries they offer are thoughtfully curated, and the insider tips on their blog were a game-changer for my recent trip. Highly recommended! Thanks to them."
              image={C2}
              name="Paul Harrison"
              position="Director"
            />
            <Feedback
              parag="I had the most incredible experience using this tour and travel
            website. From booking my flights and accommodations to discovering
            unique local activities, everything was seamless and well-organized.
            It made my trip stress-free and unforgettable. I cant wait to plan
            my next adventure with them!"
              image={C3}
              name="Mike Henderson"
              position="Business Manager & CEO"
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
