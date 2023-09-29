import React from 'react';
import Hero from '../../components/herosection/Hero';
import Products from '../products/Products';
import Features from '../products/Features';
import Stats from '../../components/stats/Stats';
import Services from '../../components/services/Services';
import CustormerSays from '../../components/services/Custormer Says';

const Main = () => {
    return (
        <div>
            <Hero></Hero>
            <Products></Products>
            <Features></Features>
            <CustormerSays></CustormerSays>
            <Services></Services>
            <Stats></Stats>

        </div>
    );
};

export default Main;