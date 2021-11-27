import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

//typagem de user
type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  //typagem de contexto 
  type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }

type AuthContextProviderProps = {
    children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();

    useEffect( () => {
     //evento para que sempre para que o login não seja perdido 
     const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          if (user) {
            const { displayName, photoURL, uid } = user
  
            //disparar erro se não tiver logado 
            if (!displayName || !photoURL ) {
              throw new Error('Missing Information from Google Account.')
            }
  
            //dados de exportação dos dados 
          setUser({
            id: uid,
            name:displayName,
            avatar:photoURL
  
           })
          }
        }
      })
  
      return () => {
        unsubscribe();
      }
    }, [])
  
    async function signInWithGoogle() {
      //autenticação do google
      const provider = new firebase.auth.GoogleAuthProvider();
  
      const result = await auth.signInWithPopup(provider)
  
        //formato de login 
          if (result.user) {
            const { displayName, photoURL, uid } = result.user
  
            //disparar erro se não tiver logado 
            if (!displayName || !photoURL ) {
              throw new Error('Missing Information from Google Account.')
            }
  
            //dados de exportação dos dados 
          setUser({
            id: uid,
            name:displayName,
            avatar:photoURL
  
           })
          }
      
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}> 
        {props.children}
        </AuthContext.Provider>
    );
}