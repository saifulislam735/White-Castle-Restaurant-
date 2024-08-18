// import React from 'react';

import { Helmet } from "react-helmet-async";
import CallUs from "../../../Components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Menu from "../Menu/Menu";
import ParallaxMenu from "../ParallaxMenu/ParallaxMenu";
import Recommandation from "../Recommandation/Recommandation";
import SwiperOrder from "../SwiperOrder/SwiperOrder";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>White Castle</title>
            </Helmet>
            <Banner></Banner>
            <SwiperOrder></SwiperOrder>
            <BistroBoss></BistroBoss>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommandation></Recommandation>
            <ParallaxMenu></ParallaxMenu>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;