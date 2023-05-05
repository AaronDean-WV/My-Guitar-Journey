import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers } from "../ApiManager";

export const ProfileEdit = () => {
  const [user, assignProfile] = useState({
    name: "",
    email: "",
    image: "",
  });
  const { userId } = useParams();
  const navigate = useNavigate();
  const localUser = localStorage.getItem("activeUser");
  const userObject = JSON.parse(localUser);

  useEffect(() => {
    fetch(`http://localhost:8088/users?userId=${userObject.id}`)
      .then((response) => response.json())
      .then((data) => {
        assignProfile(data);
      });
  }, [userId]);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    return fetch(`http://localhost:8088/users?userId=${userObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
      });
  };

  const handleDeleteButtonClick = (event) => {
    event.preventDefault();
  
    if (
      window.confirm(
        "Are you sure you want to delete your profile? This cannot be undone."
      )
    ) {
        return fetch(`http://localhost:8088/users/${userObject.id}`, {
        method: "DELETE",
      })
        .then(() => {
            getUsers()
          navigate("/login")
        })
        .catch((error) => console.error(error));
    }
  };
  
  return (
    <form className="ticketForm">
      <h2 className="ticketForm__title">Edit Profile</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(evt) =>
              assignProfile({ ...user, name: evt.target.value })
            }
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={user.email}
            onChange={(evt) =>
              assignProfile({ ...user, email: evt.target.value })
            }
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="image">Profile Image URL:</label>
          <input
            type="text"
            value={user.image}
            onChange={(evt) =>
              assignProfile({ ...user, image: evt.target.value })
            }
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleSaveButtonClick}>
        Save Edits
      </button>
      <button className="btn btn-danger" onClick={handleDeleteButtonClick}>
        Delete Profile
      </button>
    </form>
  );
};