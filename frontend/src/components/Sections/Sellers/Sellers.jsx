import classes from './Sellers.module.css'


const Sellers = (props) => {
  return (
    <div>
      <section className={classes["seller__container"]} id="seller">
        <div className={classes["seller__grid"]}>
          <div className={classes["seller__card"]}>
            <div className={classes["seller__image"]}>
              <img className={classes.im} src={props.image} alt="seller" />
              <div className={classes["seller__image__content"]}>
                <div className={classes["badge"]}>{props.badge}</div>
                  <div className={classes["seller__price"]}>
                    <p className={classes.dn}>{props.dn}</p>
                    <h4 className={classes.price}>{props.price}</h4>
                  </div>
                  <button className={classes.explore}>Explore</button>
              </div>
            </div>
            <div className={classes["seller__details"]}>
              <h4 className={classes.details}>{props.details}</h4>
              <p className={classes.parag}>
                {props.parag}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sellers;
