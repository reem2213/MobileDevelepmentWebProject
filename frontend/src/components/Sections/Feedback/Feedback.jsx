import classes from "./Feedback.module.css";
import Star from "../../../assets/star.png";
const Feedback = (props) => {
  return (
    <>
      <div className={classes["client__grid"]}>
        <div className={classes["client__card"]}>
          <div className={classes["client__card__header"]}>
            <div className={classes["ratings"]}>
              <img src={Star} className={classes.star} />
              <img src={Star} className={classes.star} />
              <img src={Star} className={classes.star} />
              <img src={Star} className={classes.star} />
            </div>
          </div>
          <p className={classes.paragraph}>
            {props.parag}

          </p>
          <div className="client__card__footer">
            <img src={props.image} className={classes.clientImg}alt="client" />
            <div className="client__details">
              <h4 className={classes.name}>{props.name}</h4>
              <p className={classes.position}>{props.position}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feedback;
