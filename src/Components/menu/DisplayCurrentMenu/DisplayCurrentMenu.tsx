import React from 'react';
import styled from 'styled-components';
import { MenuProductCategory } from '../../../context/Constants';
import { useHotburgerContext } from '../../../context/hotburger/HotburgerContext';
import BeefBurgersMenu from './BeefBurgersMenu/BeefBurgersMenu';
import ChickenBurgersMenu from './ChickenBurgersMenu/ChickenBurgersMenu';
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
</Wrapper>
);
};

export default DisplayCurrentMenu;


const Wrapper = styled.section``