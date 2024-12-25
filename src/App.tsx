import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./Layout.tsx";
import AddPostForm from "./features/posts/AddPostForm.tsx";
import SinglePostPage from "./features/posts/SinglePostPage.tsx";
import EditPostForm from "./features/posts/EditPostForm.tsx";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"post"}>
                    <Route index element={<AddPostForm/>}/>
                    <Route path={":postId"} element={<SinglePostPage/>}/>
                    <Route path={":postId/edit"} element={<EditPostForm/>}/>
                </Route>
                
                
            </Route>
        </Routes>
    )
}

export default App
