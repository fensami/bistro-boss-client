
const MenuItem = ({item}) => {
   console.log(item);
    const {price,image,recipe,name} = item ;
    return (
        <div className="flex space-x-2">
           {/* <div> */}
           <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image}  />
            <div>
                <p className="uppercase">{name}-----</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;