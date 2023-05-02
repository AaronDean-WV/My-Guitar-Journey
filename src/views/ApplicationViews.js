import { Outlet, Route, Routes } from "react-router-dom"
import "./appViews.css"
import { Profile } from "../profile/Profile"
import { Lessons } from "../lessons/Lessons"


export const ApplicationViews = () => {

    return ( 
        <Routes>
            <Route path="/" element={

                <div className="main--container">
                    <div className="section--left">
                        <div id="profile" className="profile--container"><Profile /></div>
                    </div>
                    <br></br>
                    <div className="section--right">
                        <div id="lesson" className="lesson--container"><Lessons /> </div>
                    </div>
                    <Outlet/>
                </div>
            }>
            </Route>

            <Route path="/users" element={<Profile />}></Route>
            <Route path="/lessons" element={<Lessons />}></Route>
       
        </Routes>
    )
}