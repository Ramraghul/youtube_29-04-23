import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Createurl() {
    let navigation = useNavigate()

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

    let User = localStorage.getItem("id")
    
    let formik = useFormik({
        initialValues: {
            title: "",
            URL: "",
        },
        validate: (value) => {
            let errors = {}
            //Name; 
            if (value.title === "") {
                errors.title = "border border-danger"
            }
            //password;
            if (value.URL === "") {
                errors.URL = "border border-danger"
            }
            return errors
        },
        onSubmit: async (data) => {
            try {
                data["id"]= User
                    await axios.post(`http://localhost:7000/url/new`, data);
                    navigation('/home')
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.Message}` })
            }finally{
                Toast.fire({ icon: 'success', title:'Success fully New URL add' })
                window.location.reload()
                
            }
        }
    });


    return (
        <div className="py-5">
            <div className="container">
                <div className="row hidden-md-up">

                    <div className="col-md-4 mb-4">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card">
                                <div className="card-block">
                                    <h4 className="card-title text-center mt-3">Add New URL</h4>
                                    <input type='text' placeholder='Title' className={formik.errors.title ? "ms-4 border-danger" : "ms-4"} value={formik.values.title} onChange={formik.handleChange} name="title" required />
                                    <input type='text' placeholder='URL' className={formik.errors.URL ? "ms-4 border-danger" : "ms-4"} value={formik.values.URL} onChange={formik.handleChange} name='URL' required />
                                    <div className="d-flex justify-content-center mb-3">
                                        <button className="btn btn-primary mt-4" type='submit'>Add</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Createurl