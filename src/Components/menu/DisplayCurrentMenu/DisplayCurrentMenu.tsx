import React from 'react';
import styled from 'styled-components';
import { MenuProductCategory } from '../../../context/Constants';
import { useHotburgerContext } from '../../../context/hotburger/HotburgerContext';
import BeanBurgersMenu from './BeanBurgersMenu/BeanBurgersMenu';
import BeefBurgersMenu from './BeefBurgersMenu/BeefBurgersMenu';
import Beverages from './Beverages/Beverages';
import ChickenBurgersMenu from './ChickenBurgersMenu/ChickenBurgersMenu';
import DessertsMenu from './DessertsMunu/DessertsMenu';
import FriesMenu from './FriesMenu/FriesMenu';
import KidsMenu from './KidsMenu/KidsMenu';
import SaladMenu from './SaladMenu/SaladMenu';
import TurkeyBurgersMenu from './TurkeyBurgersMenu/TurkeyBurgersMenu';

const  DisplayCurrentMenu :React.FC = () => {
const {state:{currentMenuCategory}} = useHotburgerContext()

// console.log(currentMenuCategory.toLocaleUpperCase() === MenuProductCategory.BEEF_BURGER)

console.log(currentMenuCategory.toLocaleUpperCase())
  return (
<Wrapper>
    {currentMenuCategory.toUpperCase() === MenuProductCategory.BEEF_BURGER && <BeefBurgersMenu/>}
    {currentMenuCategory.toUpperCase() === MenuProductCategory.CHICKEN_BURGER && <ChickenBurgersMenu/>}
    {currentMenuCategory.toUpperCase() === MenuProductCategory.TURKEY_BURGER && <TurkeyBurgersMenu/>}
    {currentMenuCategory.toUpperCase() === MenuProductCategory.BEAN_BURGER && <BeanBurgersMenu/>}
    {currentMenuCategory.toUpperCase() === MenuProductCategory.SALAD && <SaladMenu/>}
    {currentMenuCategory.toUpperCase() === MenuProductCategory.KID_MENU && <KidsMenu/>}
    {currentMenuCategory.toUpperCase() === MenuProductCategory.BEVERAGES && <Beverages/>}
    {currentMenuCategory.toUpperCase() === MenuProductCategory.FRIES && <FriesMenu/>}
    {currentMenuCategory.toUpperCase() === MenuProductCategory.DESSERT && <DessertsMenu/>}
</Wrapper>
);
};

export default DisplayCurrentMenu;


const Wrapper = styled.section``