/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "./usersSlice";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";

function Users() {
  const { loader, data, error } = useApi(
    "https://dummyjson.com/users"
  );

  const userInfo = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateUsers({
        userInfo: data,
      })
    );
  }, [data]);

  const users = userInfo.users || [];
  return (
    <>
      {loader && "Loading users...."}
      {error}
      <div className="users">
        {users.map((user) => (
          <Card key={user.id}>
            <img className="useImage" src={user.image} alt="user image" />
            <div>
              <b>Name:</b> {`${user.firstName} ${user.lastName}`}
            </div>
            <div>
              <b>Username</b>: {user.username}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Users;
