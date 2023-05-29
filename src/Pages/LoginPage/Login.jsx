import { useContext, useEffect,useState } from 'react';
import Swal from 'sweetalert2'

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    // const captchaRef = useRef(null)
    const [disabled, setdisabled] = useState(true)
    const { signIn } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'successfully logedIn',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
            navigate(from, { replace: true });
    }
    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])
    const handleValidateCapthcha = (e) => {
        const value = e.target.value;
        console.log(value);
        if (validateCaptcha(value)) {
            setdisabled(false)
        }
        // else{
        //     setdisabled(true)
        // }

    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />

                                </label>
                                <input  onBlur={handleValidateCapthcha} type="text"  name="captcha" placeholder="Type the Text above" className="input input-bordered" />
                                {/* <button className="btn btn-outline btn-success">Validate Captcha</button> */}


                            </div>
                            <div className="form-control mt-6">
                                
                                {/* <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" /> */}
                                {/* TODO: make button disabled */}
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </div>
                        <p><small>New here?</small><Link to='/signup' className="text-orange-400">Create a New Account</Link></p>
                    </form>

                </div>

            </div>
        </>
    );
};

export default Login;