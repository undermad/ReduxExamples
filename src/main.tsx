import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./State.ts";
import './main.css'
import {fetchUsers} from "./features/users/UsersSlice.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";

store.dispatch(fetchUsers())


createRoot(document.getElementById('root')!).render(
    <Auth0Provider
        domain={import.meta.env.VITE_OKTA_DOMAIN}
        clientId={import.meta.env.VITE_OKTA_CLIENT_ID}
        authorizationParams={{
            redirect_uri: window.location.origin,
            audience: `https://${import.meta.env.VITE_OKTA_DOMAIN}/api/v2/`,
            scope: "read:current_user update:current_user_metadata"
        }}
    >

        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </Auth0Provider>
)
