import Dialog from "./ui/Dialog.tsx";
import LoginButton from "../auth/LoginButton.tsx";
import LogoutButton from "../auth/LogoutButton.tsx";
import Profile from "../auth/Profile.tsx";


const HomePage = () => {
    
    const triggerText = "Trigger the button";
    const titleText = "Welcome to reusable components";
    const description = "This component is very flexible, you can use it in various situation";
    
    const okCallback = () => {
        console.log("Ok Callback passed through props");
    }
    
    const cancelCallback = () => {
        console.log("Cancel Callback passed through props");
    }
    
    return <>
        
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
        
        
        <Dialog triggerText={triggerText}
                okCallback={okCallback}
                cancelCallback={cancelCallback}
                okText={"Ok"}
                cancelText={"Cancel"}
                title={titleText}
                description={description}/>
    </>

}

export default HomePage;