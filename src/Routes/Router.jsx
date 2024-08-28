import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Shop from "../Pages/OurShop/Shop/Shop";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Login from "../Pages/auth/Login/Login";
import SignUp from "../Pages/auth/SignUp/SignUp";
import Profile from "../Pages/auth/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <OurMenu></OurMenu>,

            },
            {
                path: 'shop/:category',
                element: <Shop></Shop>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage></NotFoundPage>
    }
]);
