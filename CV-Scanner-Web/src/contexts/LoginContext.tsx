// import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useContext } from "react";
// import { firebaseAuth } from "../service/apps/firebase";
// import { cvScannerApi } from "../service/api/cvScannerApi";

// const provider = new GoogleAuthProvider();

interface ILoginContext {
    singInGoogle: () => Promise<void>
}

const loginContext = createContext<ILoginContext | null>(null)

export function LoginContextProvider({ children }: { children : React.ReactNode}) {
    // const [user, setUser] = useState<null | User>(null);

    async function singInGoogle() {
        try {
          // const result = await signInWithPopup(firebaseAuth, provider)
          //   // const token = credential?.accessToken;
          //   const user = result.user;
          //   const idToken = await result.user.getIdToken(true);

          //   console.log({idToken, user})

          //   const res = await cvScannerApi.get(`/api/cvResume/${idToken}`);

          //   console.log(res);
    
    
            // let usuario = (await usuarioService.login(idToken))?.data  
    
            // usuario = usuario = {
            //   ...usuario,
            //   tipoUsuario: 1
            // }
            
            // localStorage.setItem("@AuthFirebase:tokenJWT", idToken);
            // user && setUser(user);
            // usuario && sessionStorage.setItem("@Auth:user", JSON.stringify(usuario));
            // token && sessionStorage.setItem("@AuthFirebase:token", token);
            // user && sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
            // user && sessionStorage.setItem("@Signed", (!!user).toString());
        } catch (error) {
          console.log('login error:', error)
        }
      };

    return <loginContext.Provider value={{singInGoogle}}>
        {children}
    </loginContext.Provider>
}

export function useLoginContext() {
    return useContext(loginContext) as ILoginContext;
}