import Banner from "../Banner/Banner";
import BitroBossBanner from "../../HomePage/BitroBossBanner/BitroBossBanner";
import Callus from "../../HomePage/Callus/Callus";
import Category from "../../HomePage/Category/Category";
import ChefRecommends from "../../HomePage/ChefRecommends/ChefRecommends";
import Featured from "../../HomePage/Featured/Featured";
import PopularMenu from "../../HomePage/PopularMenu/PopularMenu";
import Testimonials from "../../HomePage/Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BitroBossBanner></BitroBossBanner>
            <PopularMenu></PopularMenu>
            <Callus></Callus>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;