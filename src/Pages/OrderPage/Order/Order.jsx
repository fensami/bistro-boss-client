import { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover'
import coverImg from '../../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const category = useParams()
    console.log(category);
    const dessert = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const pizza = menu.filter(item=> item.category === 'pizza')
    // const popular = menu.filter(item=> item.category === 'popular')
    const salad = menu.filter(item=> item.category === 'salad')
    const offered = menu.filter(item=> item.category === 'offered')
    const drinks = menu.filter(item=> item.category === 'drinks')
    return (
        <div>
            <Cover img={coverImg} title='order Food'></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                  <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;