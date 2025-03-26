import Button from "../button";
import GoogleSvg from '../../assets/icone-google.svg'
import { useLoginContext } from "../../contexts/LoginContext";

export default function LoginGoogle() {
    const { singInGoogle } = useLoginContext()

    return <Button onClick={singInGoogle} variant="outlined-purple">
    <img src={GoogleSvg} alt="ícone google" />
    Login
  </Button>
}