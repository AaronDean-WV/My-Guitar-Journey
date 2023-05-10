import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"


export const NavBar = () => {

    const navigate = useNavigate()
    return (

        <div className="navbar--container">


            <ul className="navbar--links">

                <li className="navbar--item active">
                    <Link className="navbar--link" to={"/lessons"}>Lessons</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" to={"/users"}>Profile</Link>
                </li>

              </ul>
            <Link className="navbar--logo" to={"/"}img src="https://th.bing.com/th/id/OIG.vABi6qO_lIVp6BWcMkKW?pid=ImgGn" alt="logo"> <h1> MY GUITAR JOURNEY </h1></Link>
            

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