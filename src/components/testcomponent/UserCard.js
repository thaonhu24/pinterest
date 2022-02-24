import React from "react";
import useFetchData from "../hooks/UseFetchData";
function UserCard() {
  const { isLoading, data: userInfo } = useFetchData(
    "https://5f3fda1244212d0016fed4db.mockapi.io/users/1"
  );
  return (
    <>
      {isLoading ? (
        <div> Loading ... </div>
      ) : userInfo ? (
        <div>
          <h2>Thông tin User</h2>
          <p>Họ tên: {userInfo.fullName}</p>
          <p>Tuổi: {userInfo.age}</p>
          <p>Địa chỉ: {userInfo.address}</p>
          <p>Số điện thoại: {userInfo.phone}</p>
        </div>
      ) : (
        <div>Không thể lấy thông tin user</div>
      )}
    </>
  );
}
export default UserCard;