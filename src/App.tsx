import './styles/App.css'
import Introduction from "./components/Introduction.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

    return (
        <div className={"relative"}>
            <Navbar/>
            <Introduction/>
        </div>
    )
}

export default App
