import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
// import menuImg from '../../../assets/menu/menu-bg.png'
import menuImg from '../../../assets/menu/menu-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
// import PopularMenu from '../../HomePage/PopularMenu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const pizza = menu.filter(item=> item.category === 'pizza')
    // const popular = menu.filter(item=> item.category === 'popular')
    const salad = menu.filter(item=> item.category === 'salad')
    const offered = menu.filter(item=> item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu'></Cover>
            <SectionTitle subHeading={`Don't miss`} heading={`TODAY'S OFFER`}></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert Menu Items */}
            <MenuCategory items={dessert}
            title='Dessert'
            img={dessertImg}
            ></MenuCategory>
            {/* pizza Menu Items */}
            <MenuCategory items={pizza}
            title='pizza'
            img={pizzaImg}
            ></MenuCategory>
            {/* Salad Menu Items */}
            <MenuCategory items={salad}
            title='salad'
            img={saladImg}
            ></MenuCategory>
            {/* pizza Menu Items */}
            <MenuCategory items={soup}
            title='soup'
            img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;