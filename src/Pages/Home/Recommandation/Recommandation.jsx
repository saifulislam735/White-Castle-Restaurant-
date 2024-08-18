// import React from 'react';

import SectionStyle from "../../../Components/SectionStyle/SectionStyle";
import cartImage1 from "../../../assets/assets/home/slide1.jpg"
import cartImage2 from "../../../assets/assets/home/slide2.jpg"
import cartImage3 from "../../../assets/assets/home/slide3.jpg"
const Recommandation = () => {
    return (
        <section className="mb-10">
            <SectionStyle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            >
            </SectionStyle>
            <div className="md:grid grid-cols-3 ">
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <img
                        src={cartImage1}
                        alt="Shoes"
                        style={{ borderRadius: '15px' }}
                        className="md:h-[250px] object-cover p-2 " />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button
                                className="hover:bg-[#1F2937] text-[#BB8506] bg-[#E8E8E8] px-6 py-4 border-b-4 border-[#BB8506] rounded-md ">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <img
                        src={cartImage2}
                        alt="Shoes"
                        style={{ borderRadius: '15px' }}
                        className="md:h-[250px] h-[300px] object-cover p-2 " />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button
                                className="hover:bg-[#1F2937] text-[#BB8506] bg-[#E8E8E8] px-6 py-4 border-b-4 border-[#BB8506] rounded-md ">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <img
                        src={cartImage3}
                        alt="Shoes"
                        style={{ borderRadius: '15px' }}
                        className="md:h-[250px] object-cover p-2 " />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button
                                className="hover:bg-[#1F2937] text-[#BB8506] bg-[#E8E8E8] px-6 py-4 border-b-4 border-[#BB8506] rounded-md ">ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Recommandation;