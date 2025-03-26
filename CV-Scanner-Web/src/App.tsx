import { GlobalContextProvider } from "./contexts/globalContext"
import { LoginContextProvider } from "./contexts/LoginContext"
import Home from "./pages/home"

function App() {
  return (
    <GlobalContextProvider>
      <LoginContextProvider>
        <Home />
      </LoginContextProvider>
    </GlobalContextProvider>
  )
}

export default App
