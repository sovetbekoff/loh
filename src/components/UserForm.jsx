// UserForm.js
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";

const UserForm = () => {
  const { users, addUser, updateUser } = useUserContext();
  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
  });

  const isNewUser = !id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNewUser) {
      addUser(user).then(() => {
        history.push("/");
      });
    } else {
      updateUser(id, user).then(() => {
        history.push("/");
      });
    }
  };

  return (
    <div>
      <h2>
        {isNewUser ? "Добавить пользователя" : "Редактировать пользователя"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Имя:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">{isNewUser ? "Добавить" : "Сохранить"}</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
