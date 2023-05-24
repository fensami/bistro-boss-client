import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] =useState([])
    useEffect(()  => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems =data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    },[])
    return (
        <section>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map((item,index) => <MenuItem
                    key={index}
                    item = {item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;