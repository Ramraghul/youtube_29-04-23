import axios from 'axios';
import { useFormik } from 'formik';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { env } from '../../../config'


function Login() {
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

    //Login Method;
    let login = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (value) => {
            let errors = {};
            //password;
            if (value.password.length <= 8) {
                errors.password = "password Must be Eight Degit"
            }
            return errors
        },
        onSubmit: async (Login) => {
            console.log(Login);
            try {
                let login = await axios.post(`http://localhost:7000/user/login`, Login);
                if (login.data) {
                    Toast.fire({ icon: 'success', title: 'Signed in successfully' })
                    localStorage.setItem("user",login.data.User)
                    localStorage.setItem("id",login.data.ID)
                    navigation('/home',);
                } else {
                    Toast.fire({ icon: 'warning', title: `${login.data.message}` })
                }
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.message}` })
            }
        }
    })

    return (
        <>
            <div className="content fadeInDown">
                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}
                    <h2 className='text-black'>Welcome</h2>

                    {/* <!-- Login Form --> */}
                    <form onSubmit={login.handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" placeholder="Email" value={login.values.email} onChange={login.handleChange} name="email" required />
                        <input type="password" id="password" className="fadeIn third" placeholder="Password" value={login.values.password} onChange={login.handleChange} name="password" required />
                        <span className="text-warning">{login.errors.password}</span>
                        <input type="submit" className="fadeIn fourth btn" id='butt' />
                    </form>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <a className="underlineHover" id='link' href="Recovery">
                            <Fragment>&nbsp;</Fragment><Fragment>&nbsp;</Fragment><Fragment>&nbsp;</Fragment></a>
                        <a className="underlineHover" id='click' href="/Signup">Create new Account</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login