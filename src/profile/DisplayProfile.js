import { useEffect, useState } from "react";
import { getUsers } from "../ApiManager";
import "./DisplayProfile.css"

export const DisplayProfile = () => {
  const [users, setProfiles] = useState([]);
  const localUser = localStorage.getItem("activeUser");
  const userObject = JSON.parse(localUser);

  useEffect(() => {
      getUsers().then((usersArray) => {
          setProfiles(usersArray);
      });
  }, []);

  const currentUser = users.find((user) => user.id === userObject.id);

  return (
      <article className="display--profile">
              <section className="display--profile" key={`display--profile--${currentUser}`}>
                  <div className="display--profile--name">{currentUser?.name}</div>
                <div className="img--move"> <img src={currentUser?.image} alt="Profile Pic" className="image-container-two" />
              </div>
              </section>
      </article>
  );
};
