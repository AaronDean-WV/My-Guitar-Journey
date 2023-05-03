import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = () => {

    const navigate = useNavigate()
    return (

        <div className="navbar--container">

            <Link className="navbar--logo" to={"/"}> <h1> MY GUITAR JOURNEY </h1></Link>

            <ul className="navbar--links">

                <li className="navbar--item active">
                    <Link className="navbar--link" to={"/lessons"}>Lessons</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" to={"/users"}>Profile</Link>
                </li>

              </ul>
            

            {
                localStorage.getItem("activeUser")
                    ? <div className="navbar--item navbar--logout">
                        <Link className="navbar--link" to="" onClick={() => {
                            localStorage.removeItem("activeUser")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </div>
                    : ""
            }

            </div>

        
    )
}