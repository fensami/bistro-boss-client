import Banner from "../Banner/Banner";
import BitroBossBanner from "../BitroBossBanner/BitroBossBanner";
import Callus from "../Callus/Callus";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
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