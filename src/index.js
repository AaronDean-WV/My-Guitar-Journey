
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { MyGuitarJourney } from "./MyGuitarJourney"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <MyGuitarJourney />
    </BrowserRouter>
)