import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
export default function Login() {
    const [isUserNew, setIsUSerNew] = useState(false)
    const [passVisible, setPassVisible] = useState(true);
    const navigate = useNavigate()

    const { loginUser, registerUser, error, setRememberMe, errorMssg, setUserInfo } = useContext(AuthContext)

    useEffect(() => {
        if (localStorage.getItem("userToken") != null) {
            navigate('/profile')
        }
    }, [loginUser])

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    useEffect(() => {
        if (localStorage.getItem("loginData") != null) {
            setLoginData(JSON.parse(localStorage.getItem("loginData")))
        }
    }, [])


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const guestUser = {
        email: "sample@gmail.com",
        password: "admin123"
    }



    const signUpUser = (data) => {
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        }
        console.log(data);
        registerUser(userData)
    };

    const signInUser = (data) => {
        const loginData = {
            email: data.email,
            password: data.password,
        }
        loginUser(loginData);
    };


    return (<>{isUserNew ? <>
        <div class="login-section">
            <div class="login-img">
                <img
                    src="https://www.posters.eu/media/catalog/product/cache/cb3faf85ecb1e071fdba48f981c86454/g/b/gb_mp1588-dc-comics-cast-5028486240852.jpg"
                    alt=""
                />
            </div>
            <div
                class="login-form bat-flex bat-flx-dir-col bat-align-center bat-justify-center-center flex-gap-1"
            >
                <h2>Hello there!</h2>
                <form onSubmit={handleSubmit(signUpUser)}>
                    <div class="bat-flex bat-align-center flex-gap-1">
                        <div class="input-parent">
                            <input
                                {...register("firstName", {
                                    required: true,
                                    minLength: 2,
                                })}
                            />

                            <label for="email">First Name </label>
                        </div>
                        <div class="input-parent">
                            <input
                                {...register("lastName", {
                                    required: true,
                                    minLength: 2,
                                })}
                            />
                            <label for="name">Last Name</label>
                        </div>


                    </div>
                    <div class="input-parent">
                        <input
                            {...register("email", {
                                required: true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                        />
                        <label for="email">Enter you email </label>
                    </div>

                    <div class="input-parent">
                        <input type={passVisible ? "password" : "text"}  {...register("password", { minLength: 6, required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ })} />
                        <label for="Password">Enter Password </label>
                        <div onClick={() => setPassVisible(!passVisible)} class="hide-pass-icon text-color-dark-grey fas fa-eye"></div>
                    </div>




                    <p class="small-text">
                        By continuing, you agree to BatStore's Terms of Use and Privacy
                        Policy.
                    </p>
                    <button class="bat-btn plcae-order-btn bat-br-3px bat-btn-primary">
                        Sign Up
                    </button>
                    <p class="bat-txt-center">OR</p>
                    <button onClick={(e) => loginUser(guestUser)}
                        class="bat-btn login-with-google-btn bat-br-3px bat-btn-primary"
                    >
                        Sign In as guest
                    </button>
                    <div class="bat-fs-1r bat-txt-center margin-t-1">
                        Already a member?
                        <div onClick={() => setIsUSerNew(false)} class="text-color-primary">Log In! </div>
                    </div>


                    {/* error handling */}
                    {errors?.password?.type === "pattern" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Password must include numbers and alphabets! </span>

                    </div>}
                    {errors?.password?.type == "required" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Please enter valid data! </span>
                    </div>}
                    {errors?.password?.type === "minLength" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Password should be atleast 6 character </span>

                    </div>}
                    {errors?.email?.type == "required" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Please enter a valid Email                       </span>
                    </div>}
                    {errors?.email?.type == "pattern" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Please enter a valid Email!                       </span>

                    </div>}
                    {errors?.lastName?.type == "required" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Last name is required
                        </span>

                    </div>}
                    {errors?.lastName?.type === "minLength" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> last name should be at least 2 character </span>

                    </div>}
                    {errors?.firstName?.type == "required" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> first name is required
                        </span>
                    </div>}
                    {errors?.firstName?.type === "minLength" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> first name should be at least 2 character </span>
                    </div>}


                </form>
            </div>
        </div>
    </>
        : <div class="login-section">
            <div class="login-img">
                <img
                    src="https://www.posters.eu/media/catalog/product/cache/cb3faf85ecb1e071fdba48f981c86454/g/b/gb_mp1588-dc-comics-cast-5028486240852.jpg"
                    alt=""
                />
            </div>
            <div
                class="login-form bat-flex bat-flx-dir-col bat-align-center bat-justify-center-center flex-gap-1"
            >
                <h2>Hello there!</h2>
                <form onSubmit={handleSubmit(signInUser)}>
                    <div class="input-parent">
                        <input
                            defaultValue={loginData.email}  {...register("email", {
                                required: true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} />
                        <label for="email">Enter you email </label>
                    </div>

                    <div class="input-parent">

                        <input defaultValue={loginData.password} type={passVisible ? "password" : "text"}  {...register("password", { minLength: 6, required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ })} />
                        <label for="Password">Enter Password </label>

                        <div onClick={() => setPassVisible(!passVisible)} class="hide-pass-icon text-color-dark-grey fas fa-eye"></div>
                    </div>
                    <div class="bat-flex bat-justify-between bat-align-center">
                        <div class="bat-flex bat-align-center bat-gap-8px">
                            <input type="checkbox" defaultChecked onClick={(e) => setRememberMe(e.target.checked)} /> Remember me
                        </div>
                        <a href="/docs/password.html" class="text-color-primary">
                            Forgot password?
                        </a>
                    </div>
                    <p class="small-text">
                        By continuing, you agree to BatStore's Terms of Use and Privacy
                        Policy.
                    </p>
                    <button class="bat-btn plcae-order-btn bat-br-3px bat-btn-primary">
                        LOGIN
                    </button>
                    <p class="bat-txt-center">OR</p>
                    <button onClick={(e) => loginUser(guestUser)}
                        class="bat-btn login-with-google-btn bat-br-3px bat-btn-primary"
                    >
                        Sign In as guest
                    </button>
                    <div class="bat-fs-1r bat-txt-center margin-t-1">
                        New to BatStore?
                        <div onClick={() => setIsUSerNew(true)} class="text-color-primary">
                            Sign Up!
                        </div>
                    </div>

                    {/* error handle */}
                    {/* error handling */}
                    {errors?.password?.type === "pattern" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Password must include numbers and alphabets! </span>

                    </div>}
                    {errors?.password?.type == "required" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Please enter password! </span>
                    </div>}
                    {errors?.password?.type === "minLength" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Password should be atleast 6 character </span>

                    </div>}
                    {errors?.email?.type == "required" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Please enter a valid Email                       </span>
                    </div>}
                    {errors?.email?.type == "pattern" && <div class="bat-alert bat-alert-dismiss bat-alert-error">
                        <span>
                            <i class="fas fa-exclamation-circle"></i> Please enter a valid Email!                       </span>

                    </div>}
                </form>
            </div>
        </div>}
        {error ? <div class="bat-alert bat-alert-dismiss bat-alert-error">
            <span>
                <i class="fas fa-exclamation-circle"></i> {errorMssg}
            </span>

        </div> : null}
    </>
    )
} 