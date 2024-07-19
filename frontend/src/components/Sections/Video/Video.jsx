import V from '../../../assets/video.mp4';
import classes from './Video.module.css';
const Video=()=>{
    return (
        <section className="tour">
      <div className={classes.container}>
        <h4 className={classes.tour}>Watch Our Video Tour</h4>
        <div className={classes.videoContainer}>
          <video src={V}  autoPlay loop muted></video>
        </div>
      </div>
    </section>
    )

}
export default Video;