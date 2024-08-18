import { useEffect, useState } from "react";
import SectionStyle from "../../../Components/SectionStyle/SectionStyle";
import MenuCard from "./MenuCard";

const Menu = () => {

    const [item, setItem] = useState([])
    const [showAll, setShowAll] = useState(false)
    // console.log(item)
    const foods = showAll ? item : item.slice(0, 6);
    // console.log(foods)


    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <section className="mb-10">
            <SectionStyle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            >
            </SectionStyle>
            <p>length :{foods.length}</p>

            <div className="grid grid-cols-2 gap-8">
                {
                    foods.map(food =>
                        <MenuCard key={food._id} food={food}></MenuCard>
                    )
                }
            </div>
            <div className="flex justify-center mt-8">
                {showAll ?
                    <button
                        onClick={() => { setShowAll(false) }}
                        className="px-8 py-4 hover:bg-slate-400 "
                        style={{
                            borderRadius: "8px",
                            borderBottom: "3px solid #1F2937",
                            fontSize: '20px',
                            color: ' #1F2937',
                            fontWeight: '500'
                        }}
                    >Close All</button>
                    :
                    <button
                        onClick={() => { setShowAll(true) }}
                        className="px-8 py-4 hover:bg-slate-400 "
                        style={{
                            borderRadius: "8px",
                            borderBottom: "3px solid #1F2937",
                            fontSize: '20px',
                            color: ' #1F2937',
                            fontWeight: '500'
                        }}>View Full  Menu</button>

                }
            </div>
        </section>
    );
};

export default Menu;