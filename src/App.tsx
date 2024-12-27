import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./Layout.tsx";
import Profile from "./auth/Profile.tsx";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
            </Route>
        </Routes>
    )
}

export default App
