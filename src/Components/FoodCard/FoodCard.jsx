
const FoodCard = ({item}) => {
    const {price,image,recipe,name} = item ;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mt-5 mr-5 bg-slate-900 text-white px-5">{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                
                <div className="card-actions items-center flex flex-col ">
                    <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Adde to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;