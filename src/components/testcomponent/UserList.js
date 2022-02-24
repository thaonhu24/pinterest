import React from "react";
import useFetchData from "../hooks/UseFetchData";
function UserList() {
  const { isLoading, data: list } = useFetchData(
    "https://5f3fda1244212d0016fed4db.mockapi.io/users"
  );
  return (
    <>
      {isLoading ? (
        <div> Loading ... </div>
      ) : list ? (
        <ul>
          <h1>Danh sách người dùng</h1>
          {list.map((user, index) => (
            <li key={index}>
              Họ tên: {user.fullName} - Số điện thoại: {user.phone}
            </li>
          ))}
        </ul>
      ) : (
        <div>Không thể lấy danh sách người dùng</div>
      )}
    </>
  );
}
export default UserList;