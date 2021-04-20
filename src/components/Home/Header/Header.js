import React from 'react';
import AnotherSection from '../AnotherSection/AnotherSection';
import Footer from '../Footer/Footer';
import HeaderMain from '../Headermain/HeaderMain';
import Navbar from '../NavBar/Navbar';
import NewSection from '../NewSection/NewSection';
import Review from '../Review/Review';
import Service from '../service/Service';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Service></Service>
            <NewSection></NewSection>
            <Review></Review>
            <AnotherSection></AnotherSection>
            <Footer></Footer>
        </div>
    );
};

export default Header;