import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./State.ts";
import './main.css'
import {fetchUsers} from "./features/users/UsersSlice.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";

store.dispatch(fetchUsers())


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
)
