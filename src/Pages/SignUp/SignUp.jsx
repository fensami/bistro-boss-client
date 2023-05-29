import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
    const {createUser ,updateUserProfile} = useContext(AuthContext)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUserProfile(data.name, data.photoUrl)
            .then(()=> {
                
                // console.log('user photo updated');

                const saveUser = {name: data.name, email: data.email}

                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/')

                    }
                    // console.log(data);
                })



              
                  
            })
            .catch(error => {console.log(error);})

        })
    };

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
       <>
        <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name",{ required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text"  {...register("photoUrl",{ required: true })} placeholder="photoUrl" className="input input-bordered" />
                            {errors.photoUrl && <span className="text-red-600">photoUrl is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"  {...register("email",{ required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password",{ required: true, minLength:6,  maxLength: 20 })} placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-600">Password field is required</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signup" />
                        </div>
                        <p><small>Already Have An Account</small><Link to='/login' className="text-orange-400">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
       </>
    );
};

export default SignUp;