import { useEffect, useState } from "react";
import { getUsers } from "../ApiManager";


export const Profile = () => {
    const [users, setProfiles] = useState([])
    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    useEffect( () => {
      getUsers()
            .then(
                (usersArray) => {
                    setProfiles(usersArray)
                }
            )
        },
        []
    )

    const currentUser = users.find((user) => user.id === userObject.id);
    return (
        <article className="profile">
          <section className="profile" key={`profile--${currentUser}`}>
            <div className="profile--name">Name: {currentUser?.name}</div>
            <div className="profile--email">Email: {currentUser?.email}</div>
            <img src={currentUser?.image} alt="Profile Pic" className="image-container"  />
          </section>
        </article>
      );
    };
    


