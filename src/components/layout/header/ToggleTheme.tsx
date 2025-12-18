import { useTheme } from "../../../hooks/useTheme"


const ToggleTheme: React.FC = ()=>{

    const {theme, toggleTheme} = useTheme();

    return <>

    <button onClick={toggleTheme} className="px-4 py-2 rounded bg-winter text-primary_dark">
        current theme: {theme}
    </button>
    </>
}

export default ToggleTheme;