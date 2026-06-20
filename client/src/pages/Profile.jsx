import { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        console.log("Token:", token);

        const res = await API.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Profile Response:", res.data);

        setUser(res.data);
      } catch (error) {
        console.log("Profile Error:", error);
        console.log("Response:", error.response);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>

      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </>
      )}
    </div>
  );
}

export default Profile;