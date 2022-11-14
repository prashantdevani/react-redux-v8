/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "./usersSlice";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";

function Users() {
  const [search, setSearch] = useState("");
  const url = search
    ? `https://dummyjson.com/users/search?q=${search}`
    : "https://dummyjson.com/users";
  const { loader, data, error, refetch } = useApi(url);

  const userInfo = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateUsers({
        userInfo: data,
      })
    );
  }, [data]);

  useEffect(() => {
    refetch();
  }, [search])

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const users = userInfo.users || [];
  return (
    <>
      {loader && "Loading users...."}
      {error}
      {<input name="search" value={search} onChange={searchHandler} />}
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
