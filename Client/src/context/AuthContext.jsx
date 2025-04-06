import { createContext, useEffect,useState,useContext } from "react"


const AuthContext=createContext()

const AuthProvider=({children})=>{//children means the components that will be wrapped by this provider

    const [auth,setAuth]=useState({
        token:'',
        user:{}
    })//initially auth is empty object

    const [loading,setLoading]=useState(true)//loading is true initially

    useEffect(()=>{
        const token=localStorage.getItem('token')
        const user=JSON.parse(localStorage.getItem('user'))//parse the string to object
        if(token && user){//if token and user are present in local storage
            setAuth({token,user})
        }
        setLoading(false)//set loading to false after checking local storage
        
    },[])


    return(
        <AuthContext.Provider value={{auth,setAuth,loading}}>
            {children}
        </AuthContext.Provider>

    )

}

const useAuth=()=>useContext(AuthContext)//this is syntax of Custom Hook, it will return the context value
export { useAuth, AuthProvider };