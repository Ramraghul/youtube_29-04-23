import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function Navbar() {
  let user = localStorage.getItem("user")
  
  const navigation = useNavigate()
  const [data, setData] = useState([])

  //Alert function;
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let id = localStorage.getItem("id")
      let res = await axios.get(`http://localhost:7000/url/data/${id}`)
      if (res.data) {
        setData(res.data)
      } else {
        Toast.fire({ icon: 'error', title: `Please Login first` })
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const View = (data) => {
    navigation('/home/view', { state: { data } })
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user}{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/home/newurl">Add URL</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Log out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="sidebar-fixed-top-and-bottom">
          {/* <div className="sidebar-content"> */}
          <div className="row mt-2">

            {
              data ? data.map((item,index) => {
                return (
                  <div className="col-11" key={index}>
                    <div className="card m-1 ">
                      {/* <div className="card-body"> */}
                      <h5 className="card-title m-0 mt-1 text-center">{item.TITLE}</h5>
                      <button className="btn btn-primary btn-sm ms-4 me-4 mb-1 mt-2" onClick={() => { View(item) }}>
                        <i className="bi bi-eye-fill"></i> View
                      </button>
                      {/* </div> */}
                    </div>
                  </div>
                )
              }) : null
            }

          </div>
          {/* </div> */}
        </div>

        <div className="main-content">
          <p>
            <Outlet />
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar