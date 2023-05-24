import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading={'Check it out'} heading={'Featured Item'}></SectionTitle>
            <article className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-12 px-36 ">

                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>

                </div>
            </article>
        </div>
    );
};

export default Featured;