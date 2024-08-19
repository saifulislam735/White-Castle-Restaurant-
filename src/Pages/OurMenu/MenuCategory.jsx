import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../Home/Menu/MenuCard";
import ViewMoreBtn from "../../Components/ViewMoreBtn/ViewMoreBtn";

const MenuCategory = ({ foodItems, Img, heading, description, section }) => {
    const [showAll, setShowAll] = useState(false)
    const foods = showAll ? foodItems : foodItems.slice(0, 6);
    return (
        <div className="mb-10">
            <Cover Img={Img} heading={heading} description={description} section={section} ></Cover>
            <div className="md:grid grid-cols-2 gap-8  pt-16 border border-gray-200 rounded-md px-5 py-5 ">
                {
                    foods.map(food =>
                        <MenuCard key={food._id} food={food}></MenuCard>
                    )
                }
            </div>
            <ViewMoreBtn showAll={showAll} setShowAll={setShowAll}></ViewMoreBtn>
        </div>
    );
};

export default MenuCategory;