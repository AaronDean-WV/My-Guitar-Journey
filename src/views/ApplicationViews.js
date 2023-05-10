import { Outlet, Route, Routes } from "react-router-dom"
import "./appViews.css"
import { Profile } from "../profile/Profile"
import { Lessons } from "../lessons/Lessons"
import { DisplayProfile } from "../profile/DisplayProfile"
import { CompletedLessons } from "../lessons/CompletedLessons"


export const ApplicationViews = () => {

    return ( 
        <Routes>
            <Route path="/" element={

                <div className="main--container">
                     <div className="section--left" style={{ position: 'absolute', top: '40px', right: 0 }}>
                        <div id="profile" className="profile--container"><DisplayProfile /></div>
                    </div>
                    <br></br>
                    <div className="section--right">
                        <div id="lesson" className="lesson--container"><CompletedLessons/> </div>
                    </div>
                    <Outlet/>
                </div>
            }>
            </Route>

            <Route path="/displayUsers" element={<DisplayProfile />}></Route>
            <Route path="/lessons" element={<Lessons />}></Route>
            <Route path="/users" element={<Profile />}></Route>
            <Route path="/ComletedLessons" element={<CompletedLessons />}></Route>
            
       
        </Routes>
    )
}