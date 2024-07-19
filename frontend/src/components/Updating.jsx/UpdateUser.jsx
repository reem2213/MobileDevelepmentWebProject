
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Bg from "../../assets/naturee.jpeg";
import classes from "./Update.module.css";
import Swal from 'sweetalert2';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("");
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [travelClass, setClass] = useState("");

  const [paxNumber, setPaxNumber] = useState("");

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/get/${id}`);
        console.log(response);
        setFullName(response.data.fullname);
        setDestination(response.data.destination);
        setCheckIn(response.data.checkIn);
        setCheckOut(response.data.checkOut);
        setClass(response.data.travelClass);
        setPaxNumber(response.data.paxNumber);
        setIsPopupOpen(true); // Open the popup
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/update/${id}`, {
        fullname,
        destination,
        checkIn,
        checkOut,
        travelClass,
        paxNumber,
      })
      .then((res) => {
        console.log(res);
        setIsPopupOpen(false);
        navigate("/booking"); // Close the popup after updating
      })
      .catch((err) => console.log(err));

      Swal.fire(
        'Good job!',
        'Updated Successfully!',
        'success'
      )
  };

  const closePopup = () => {
    navigate("/booking");
  };

  return (
    <>
      {isPopupOpen && (
        <div className={classes.popup}>
          <div className={classes.popupContent}>
            <span className={classes.close} onClick={closePopup}>
              &times;
            </span>
            <form onSubmit={handleUpdate} className={classes.formm}>
              <h2>Update User</h2>
              <div>
                <label htmlFor="">FullName</label>
                <input
                  type="text"
                  value={fullname}
                  placeholder="Enter Name"
                  className="form-control"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Destination</label>
                <input
                  type="text"
                  value={destination}
                  placeholder="Enter destination"
                  className="form-control"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">checkIn</label>
                <input
                  type="date"
                  value={checkIn}
                  placeholder="Enter Age"
                  className="form-control"
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">checkOut</label>
                <input
                  type="date"
                  value={checkOut}
                  placeholder="Enter Age"
                  className="form-control"
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Travel Class:</label>
                <select
                  id="travelClass"
                  name="classs"
                  value={travelClass}
                  placeholder="select your class"
                  className="form-control"
                  onChange={(e) => setClass(e.target.value)}
                >
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="">paxNumber</label>
                <input
                  type="numeric"
                  value={paxNumber}
                  placeholder="Enter paxnb"
                  className="form-control"
                  onChange={(e) => setPaxNumber(e.target.value)}
                />
              </div>
              <button type="submit" className={classes["submit-button"]}>
                Update
              </button>
            </form>
          </div>
        </div>
      )}

      <img src={Bg} className={classes.bg} />
    </>
  );
};

export default Booking;
