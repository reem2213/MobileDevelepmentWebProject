import  { useState, useEffect } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import Header from '../Header/Header';
import Bg from '../../assets/maldives.jpeg';
import Bg2 from '../../assets/OIP.jpeg';
import classes from './Booking.module.css';
import Footer from '../Sections/Footer/Footer';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

const Booking = () => {
  const [form, setForm] = useState({
    fullname: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    travelClass:'',
    paxNumber: '',
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/').then((res) => {
      setData(res.data);
    }).catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/deleteuser/${id}`)
      .then((res) => {
        console.log(res);
        setData((prevData) => prevData.filter((user) => user._id !== id));
      })
      .catch((err) => console.log(err));
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your Booking has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    
    
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/create', form)
      .then((res) => {
        console.log(res);
        setData((prevData) => [...prevData, res.data]);
        setForm({
          fullname: '',
          destination: '',
          checkIn: '',
          checkOut: '',
          travelClass:'',
          paxNumber: '',
        });
      })
      .catch((err) => console.log(err));

      Swal.fire(
        'Good job!',
        'Congratulations! Your Flight is Reserved.',
        'success'
      )
  };


    
  
    
    

  return (
    <>
      <img src={Bg2} className={classes.image} alt="Image" />
      <Header />
      <p className={classes.title}>READY FOR UNFORGATABLE TRAVEL.</p>
      <p className={classes.title2}>BOOK NOW!</p>

      <div className={classes.divv}>
        <h1 className={classes['get-in-touch']}>BOOK NOW!</h1>
        <form onSubmit={handleSubmit} className={classes.formm}>
          <input
            className={classes.input}
            type="text"
            id="name"
            name="fullname"
            placeholder="Full name"
            onChange={handleChange}
            value={form.fullname}
            required
          />
          <input
            className={classes.input}
            type="text"
            id="destination"
            name="destination"
            placeholder="Your destination"
            required
            onChange={handleChange}
            value={form.destination}
          />
          <input
            className={classes.input}
            type="date"
            id="checkIn"
            name="checkIn"
            placeholder="Check In"
            required
            onChange={handleChange}
            value={form.checkIn}
          />
          <input
            className={classes.input}
            type="date"
            id="checkOut"
            name="checkOut"
            placeholder="Check Out"
            rows="5"
            onChange={handleChange}
            value={form.checkOut}
            required
          />
          <select
            id="travelClass"
            name="travelClass"
            onChange={handleChange}
            value={form.travelClass}
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </select>
          <input
            className={classes.input}
            type='numeric'
            id="paxNumber"
            name="paxNumber"
            placeholder="Pax nb."
            onChange={handleChange}
            value={form.paxNumber}
            required
          />
          
          <button type="submit" className={classes['submit-button']}>Send</button>
        </form>
      </div>
      <img src={Bg} className={classes.bg} />
      <div className={classes['div-container']}>
        <div className={classes.divTable}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>FullName</th>
                <th>Destination</th>
                <th>CheckIn</th>
                <th>CheckOut</th>
                <th>TravelClass</th>
                <th>PaxNumber</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullname}</td>
                  <td>{user.destination}</td>
                  <td>{user.checkIn}</td>
                  <td>{user.checkOut}</td>
                  <td>{user.travelClass}</td>
                  <td>{user.paxNumber}</td>
                  <td>
                    <Link to={`/edit/${user._id}`} ><button className={classes["btn-success"]}>Update</button></Link>
                    <button onClick={() => handleDelete(user._id)} className={classes["btn-danger"]}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
<Footer/>








      
    </>
  );
};

export default Booking;
