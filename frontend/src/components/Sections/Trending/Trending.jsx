import classes from "./Trending.module.css";
import Star from "../../../assets/star.png";
// import { useState,useEffect } from "react";

import Clock from "../../../assets/clock.png";
const Trending = (props) => {
  
  return (
    <div className={classes["trending-card"]} id="trending-card">

      <img
        src={props.image}
        className={classes.cardImage}
        loading="lazy"
        width={340}
        height={380}
      />

      <div className={classes["card-content"]}>
        <div className={classes["card-rating"]}>
          <img src={Star} className={classes.star} />
          <img src={Star} className={classes.star} />
          <img src={Star} className={classes.star} />
          <img src={Star} className={classes.star} />
        </div>
        <h3 className={classes.title} id="title">{props.cardTitle}</h3>

        <p className={classes.subtitle}>{props.subtitle}</p>

        <p className={classes.from}>From</p>
        <p className={classes.price}>{props.price} </p>
        <p className={classes.varie}>*Price varie</p>
        <p className={classes.rate}>{props.rate}</p>

        <img src={Clock} className={classes.clock} />
        <p className={classes.day}>{props.day} </p>
      </div>
    </div>
  );
};
export default Trending;
