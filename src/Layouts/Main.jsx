import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const Main = () => {
    return (
        <div   >
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;