import classes from "./Packages.module.css";
import Bg from "../../assets/bg11.jpg";
import Bg2 from "../../assets/OIP.jpeg";
import Header from "../Header/Header";
import Footer from "../Sections/Footer/Footer";
import G1 from "../../assets/gallery-1.jpg";
import G2 from "../../assets/gallery-2.jpg";
import G3 from "../../assets/gallery-3.jpg";
import G4 from "../../assets/gallery-4.jpg";
import G5 from "../../assets/gallery-5.jpg";
import Star from "../../assets/star.png";
import Time from "../../assets/time.png";
import Location from "../../assets/location.png";
import Pax from "../../assets/pax.png";
import Data from "./data.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Red from "../../assets/redHeart.png";
import White from "../../assets/whiteHeart.png";
const initialLikeCounts = [420, 280, 351, 488, 650, 594, 373];

const Packages = () => {
  const data = Data.Packages;

  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const importedImages = await Promise.all(
        data.map(async (p) => {
          const module = await import(`../../assets/${p.image}`);
          return module.default;
        })
      );

      setImages(importedImages);
    };

    importImages();
  }, [data]);

  const [isLiked, setIsLiked] = useState(
    Array(initialLikeCounts.length).fill(false)
  );
  const [likeCounts, setLikeCounts] = useState(
    initialLikeCounts.slice(0, initialLikeCounts.length)
  );

  const handleLike = (index) => {
    const newLikeCounts = [...likeCounts];
    newLikeCounts[index] = isLiked[index]
      ? likeCounts[index] - 1
      : likeCounts[index] + 1;

    setLikeCounts(newLikeCounts);
    setIsLiked((prev) => {
      const updatedIsLiked = [...prev];
      updatedIsLiked[index] = !prev[index];
      return updatedIsLiked;
    });
  };


  
  return (
    <>
      <img src={Bg2} className={classes.image} alt="Image" />
      <Header />
      <p className={classes.title}>READY FOR UNFORGATABLE TRAVEL.</p>
      <p className={classes.title2}>CHOOSE YOUR PACKAGE NOW!</p>

      <img src={Bg} className={classes.bg} />
      <section className={classes.package} id="package">
        <div className={classes.container}>
          <p className={classes["section-subtitle"]}>Popular Packeges</p>

          <h2 className={classes["sectionPackages"]}>CHECKOUT OUR PACKAGES</h2>

          {data.map((p, index) => (
            <ul className={classes["package-list"]} key={index}>
              <>
                <li>
                  <div className={classes["package-card"]}>
                    <img
                      className={classes["card-banner"]}
                      src={images[index]}
                    />

                    <div className={classes["card-content"]}>
                      <h3 className={classes["h3 card-title"]}>{p.title}</h3>

                      <p className={classes["card-text"]}>{p.text}</p>

                      <ul className={classes["card-meta-list"]}>
                        <li className={classes["card-meta-item"]}>
                          <div className={classes["meta-box"]}>
                            <img src={Time} />

                            <p className={classes.text}>{p.time}</p>
                          </div>
                        </li>

                        <li className={classes["card-meta-item"]}>
                          <div className={classes["meta-box"]}>
                            <img src={Pax} />

                            <p className={classes.text}>{p.pax}</p>
                          </div>
                        </li>

                        <li className={classes["card-meta-item"]}>
                          <div className={classes["meta-box"]}>
                            <img src={Location} className={classes.loc} />

                            <p className={classes.text}>{p.country}</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className={classes["card-price"]}>
                      <div className={classes.wrapper}>
                        <p className={classes.reviews}>{p.reviews}</p>

                        <div className={classes["card-rating"]}>
                          <img src={Star} className={classes.star} />
                          <img src={Star} className={classes.star} />
                          <img src={Star} className={classes.star} />
                          <img src={Star} className={classes.star} />
                        </div>
                      </div>

                      <p className={classes.price}>
                        {p.price}
                        <span>{p.span}</span>
                      </p>

                      <Link to="/booking">
                        <button className={classes["book-button"]}>
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              </>
            </ul>
          ))}
        </div>
      </section>

      <section className={classes.gallery} id="gallery">
        <div className={classes.container}>
          <p className={classes["photos-gallery"]}>PHOTOS GALLERY</p>

          <h2 className={classes.sectionGallery}>PHOTOS FROM TRAVELLERS</h2>
          <motion.div
            whileTap={{ scale: 1, backgroundColor: "#171515" }}
            transition={{ type: "spring" }}
            onClick={() => handleLike(0)}
            style={{ cursor: "pointer" }}
          >
            {isLiked[0] ? (
              <img
                className={classes.like}
                src={Red}
                alt="heart"
                width={50}
                height={50}
              />
            ) : (
              <img
                className={classes.like}
                src={White}
                alt="heart"
                width={50}
                height={50}
              />
            )}
          </motion.div>
          <p className={classes.likesCounts}>{likeCounts[0]}</p>
          <motion.div
            whileTap={{ scale: 1, backgroundColor: "#171515" }}
            transition={{ type: "spring" }}
            onClick={() => handleLike(1)}
            style={{ cursor: "pointer" }}
          >
            {isLiked[1] ? (
              <img
                className={classes.like2}
                src={Red}
                alt="heart"
                width={50}
                height={50}
              />
            ) : (
              <img
                className={classes.like2}
                src={White}
                alt="heart"
                width={50}
                height={50}
              />
            )}
          </motion.div>
          <p className={classes.likesCounts2}>{likeCounts[1]}</p>
          
          <motion.div
            whileTap={{ scale: 1, backgroundColor: "#171515" }}
            transition={{ type: "spring" }}
            onClick={() => handleLike(2)}
            style={{ cursor: "pointer" }}
          >
            {isLiked[2] ? (
              <img
                className={classes.like3}
                src={Red}
                alt="heart"
                width={50}
                height={50}
              />
            ) : (
              <img
                className={classes.like3}
                src={White}
                alt="heart"
                width={50}
                height={50}
              />
            )}
          </motion.div>
          <p className={classes.likesCounts3}>{likeCounts[2]}</p>
          <motion.div
            whileTap={{ scale: 1, backgroundColor: "#171515" }}
            transition={{ type: "spring" }}
            onClick={() => handleLike(3)}
            style={{ cursor: "pointer" }}
          >
            {isLiked[3] ? (
              <img
                className={classes.like4}
                src={Red}
                alt="heart"
                width={50}
                height={50}
              />
            ) : (
              <img
                className={classes.like4}
                src={White}
                alt="heart"
                width={50}
                height={50}
              />
            )}
          </motion.div>
          <p className={classes.likesCounts4}>{likeCounts[3]}</p>
          <motion.div
            whileTap={{ scale: 1, backgroundColor: "#171515" }}
            transition={{ type: "spring"}}
            onClick={() => handleLike(4)}
            style={{ cursor: "pointer" }}
          >
            {isLiked[4] ? (
              <img
                className={classes.like5}
                src={Red}
                alt="heart"
                width={50}
                height={50}
              />
            ) : (
              <img
                className={classes.like5}
                src={White}
                alt="heart"
                width={50}
                height={50}
              />
            )}
          </motion.div>
          <p className={classes.likesCounts5}>{likeCounts[4]}</p>

          <ul className={classes["gallery-list"]}>
            <li className={classes["gallery-item"]}>
              <figure className={classes["gallery-image"]}>
                <img src={G1} alt="Gallery image" />
              </figure>
              
            </li>

            <li className={classes["gallery-item"]}>
              <figure className={classes["gallery-image"]}>
                <img src={G2} alt="Gallery image" />
              </figure>
            </li>
            <li className={classes["gallery-item"]}>
              <figure className={classes["gallery-image"]}>
                <img src={G3} alt="Gallery image" />
              </figure>
            </li>
            <li className={classes["gallery-item"]}>
              <figure className={classes["gallery-image"]}>
                <img src={G4} alt="Gallery image" />
              </figure>
            </li>
            <li className={classes["gallery-item"]}>
              <figure className={classes["gallery-image"]}>
                <img src={G5} alt="Gallery image" />
              </figure>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Packages;
