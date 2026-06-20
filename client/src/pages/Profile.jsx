import { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setName(res.data.name);
        setEmail(res.data.email);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.put(
        "/profile",
        {
          name,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleUpdate}>
        Update Profile
      </button>

      <button
        onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }}
    >
      Logout
    </button>
    </div>
  );
}

export default Profile;