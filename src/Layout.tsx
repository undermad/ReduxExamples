import {Outlet} from "react-router-dom";
import Header from "./pages/Header.tsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Layout;