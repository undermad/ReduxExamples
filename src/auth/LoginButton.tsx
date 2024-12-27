import Button from "../pages/components/Button.tsx";
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    return <>
        <Button
            onClick={() => {
                loginWithRedirect()
            }}
            variant={"primary"}>Login</Button>
    </>
}

export default LoginButton;