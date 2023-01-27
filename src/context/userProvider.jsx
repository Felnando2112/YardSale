import React , {useState,useContext} from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();


export function useUserContext(){
    return useContext(userContext);
}

export function useUserToggle(){
    return useContext(userToggleContext);
}

export function UserProvider(props){

    const [user,setUser] = useState({
        email: null,
        password: null
    });

    const cambiaLogin = (mail,passwor) => {
        if(user){
            setUser(null);
        }else if(mail === ''){
            setUser({...user, password: passwor})
        }else {
            setUser({...user,email: mail, password: passwor})
        }
    }

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiaLogin}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}