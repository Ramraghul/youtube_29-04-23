import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


function Sigin() {
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

    //Registration method;
    let formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validate: (value) => {
            let errors = {}
            //Name; 
            if (value.username === "") {
                errors.username = "border border-danger"
            }
            //password;
            if (value.password.length <= 6) {
                errors.password = "password must be 8 Digit"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                let test = await axios.post(`http://localhost:7000/user/newuser`, User);
                Toast.fire({ icon: 'success', title: `${test.data.Message}` })
                navigation('/')
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.Message}` })
            }
        }
    });
    return (
        <>
            <div className="sign fadeInDown">
                <div id="formContent">
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="username" className="fadeIn second mt-5 " placeholder="Username" value={formik.values.username} onChange={formik.handleChange} name="username" />
                        <input type="text" id="email" className="fadeIn second" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} name='email' required />
                        <input type="password" id="password" className={formik.errors.password ? "fadeIn third border-danger" : "fadeIn third"} placeholder="Password" value={formik.values.password} onChange={formik.handleChange} name='password' required />
                        <input type="submit" disabled={!formik.isValid} className="fadeIn fourth btn" id='butt' />
                    </form>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <a className="underlineHover" id='click' href="/">Already have Account</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sigin