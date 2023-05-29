import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../../Hooks/useCarts";

const FoodCard = ({ item }) => {
    const { price, image, recipe, name, _id } = item;

    const { user } = useContext(AuthContext);
    const [, refetch] = useCarts();
    // console.log(refetch);
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const orderItem = { foodItem: _id, name, image, price, email: user.email }
            console.log(orderItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        // alert('kaku')
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to order food',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mt-5 mr-5 bg-slate-900 text-white px-5">{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions items-center flex flex-col ">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Adde to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;