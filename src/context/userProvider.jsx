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

    const [user,setUser] = useState(null);

    const cambiaLogin = () => {
        if(user){
            setUser(null);
        }else{
            setUser({
            email: 'fernandoavenda2112@gmail.com' ,
            password: '12345678'
            })
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