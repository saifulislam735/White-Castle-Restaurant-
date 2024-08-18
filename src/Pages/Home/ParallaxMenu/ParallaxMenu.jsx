// import React from 'react';

import Button from "../../../Components/Button/Button";
import SectionStyle from "../../../Components/SectionStyle/SectionStyle";
import parallaxBackgroudImage from '../../../assets/assets/home/featured.jpg';

const ParallaxMenu = () => {
    return (
        <div
            className="bg-fixed bg-center bg-cover h-[500px]  w-full "
            style={{
                backgroundImage: `url(${parallaxBackgroudImage})`,
                opacity: 10
            }}

        >
            <SectionStyle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionStyle>
            <div className="grid grid-cols-2 px-[250px] gap-10">
                <img src={parallaxBackgroudImage} alt="" />
                <div className="text-white">
                    <p className="text-xl">March 20, 2023</p>
                    <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <Button
                        buttonColor="#FFF"
                        buttonText="Read More"
                        borderColor="#FFF"
                        backgroundOpacity="0"
                    ></Button>
                </div>
            </div>
        </div>
    );
};

export default ParallaxMenu;
