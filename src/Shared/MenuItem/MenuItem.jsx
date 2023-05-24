
const MenuItem = ({item}) => {
   console.log(item);
    const {price,image,recipe,name} = item ;
    return (
        <div className="flex space-x-2">
           {/* <div> */}
           <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image}  />
           {/* <h1>kaku</h1> */}
           {/* <img  src='https://media.istockphoto.com/id/1439970157/photo/duck-breast.jpg?b=1&s=170667a&w=0&k=20&c=b7Jt6Etp5z_WIqYyF07ksXaNJ8GNsX21mIlm6E7z54Y=' alt="" /> */}
           {/* </div> */}
            <div>
                <p className="uppercase">{name}-----</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;