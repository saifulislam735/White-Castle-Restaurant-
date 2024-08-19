
const FoodCard = ({ Img, title, description }) => {
    return (
        <div className="card bg-base-100 w-80 md:w-96 shadow-xl mt-4 md:mt-0 mx-auto">
            <img
                src={Img}
                alt="Shoes"
                style={{ borderRadius: '15px' }}
                className="h-[250px] md:h-[250px] object-cover p-2" />
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button
                        className="hover:bg-[#1F2937] text-[#BB8506] bg-[#E8E8E8] px-6 py-4 border-b-4 border-[#BB8506] rounded-md ">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;