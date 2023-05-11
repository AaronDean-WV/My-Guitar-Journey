import { useEffect, useState } from "react";
import { getUsers } from "../ApiManager";
import { ProfileEdit } from "./EditProfile";
import "./Profile.css"


export const Profile = () => {
  const [users, setProfiles] = useState([]);
  const [editing, setEditing] = useState(false);
  const localUser = localStorage.getItem("activeUser");
  const userObject = JSON.parse(localUser);

  useEffect(() => {
      getUsers().then((usersArray) => {
          setProfiles(usersArray);
      });
  }, []);

  const handleEditProfile = () => {
      setEditing(true);
  };

  const currentUser = users.find((user) => user.id === userObject.id);
  const styles = {
    imageContainer: {
      float: 'left',
      marginRight: '20px',
    }
  };
  

  return (
    <article className="profile">
    {editing ? (
       <div className="edit--profile"> <ProfileEdit currentUser={currentUser} setEditing={setEditing} /> </div>
    ) : (
        <section className="profile" key={`profile--${currentUser}`}>
            <button onClick={handleEditProfile}>Edit Your Profile</button>
            <div className="profile--name">Name: {currentUser?.name}</div>
            <div className="profile--email">Email: {currentUser?.email}</div>
            <img src={currentUser?.image} alt="Profile Pic" style={styles.imageContainer} />
        </section>
    )}
  </article>
  
  );
};
