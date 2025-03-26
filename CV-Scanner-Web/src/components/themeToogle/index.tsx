import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useTheme from "../../hooks/useTheme";
import { useGlobalContext } from "../../contexts/globalContext";

export default function ThemeToogleButton() {
    const {toogleTheme} = useTheme()

    const {theme} = useGlobalContext()

    return <Button variant="dark" onClick={toogleTheme}>
        {theme !== 'dark' && <FontAwesomeIcon icon={faMoon} />}
        {theme === 'dark' && <FontAwesomeIcon icon={faSun} />}
    </Button>
}