import classes from "./Destination.module.css";
import Star from '../../../assets/star.png'
const Destination = (props) => {

  
  return (
    
          <div className={classes["popular-card"]}>
              <img src={props.image} className={classes.cardImage} loading="lazy" width={340} height={380} />

            <div className={classes["card-content"]}>
              <div className={classes["card-rating"]}>
                <img src={Star} className={classes.star}/>
                <img src={Star} className={classes.star}/>
                <img src={Star} className={classes.star}/>
                <img src={Star} className={classes.star}/>
                
              </div>

              <p className={classes["card-subtitle"]}>{props.country}</p>

              <h3 className={classes["card-title"]}>{props.cardTitle}</h3>

              <p className={classes["card-text"]}>{props.cardText} </p>
            </div>
          </div>
    
  );
};
export default Destination;
