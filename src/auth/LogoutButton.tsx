import {useAuth0} from "@auth0/auth0-react";
import Button from "../pages/components/Button.tsx";

const LogoutButton = () => {
    const {logout} = useAuth0();

    return (
        <Button
            onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}
            variant={"secondary"}
        >
            Log Out
        </Button>
    );
};

export default LogoutButton;