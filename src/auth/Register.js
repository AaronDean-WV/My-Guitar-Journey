import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"

export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        name: "",
        image: null // add a field for the user's guitar
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("activeUser", JSON.stringify({
                        id: createdUser.id,
                        email: createdUser.email,
                        name: createdUser.name,
                        image: createdUser.image
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        if (evt.target.id === "avatar") {
            copy.avatar = evt.target.files[0] // handle the user's avatar upload
        } else {
            copy[evt.target.id] = evt.target.value
        }
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register NOW to become instant rock master</h1>
                <fieldset>
                    <label htmlFor="name"> Full Name </label>
                    <input onChange={updateUser}
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Enter your email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="image"> Upload a photo of your guitar! </label>
                    <input onChange={updateUser}
                        type="file" id="image" accept="image/*" className="form-control" />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}
