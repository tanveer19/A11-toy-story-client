import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <Helmet>
          <title>Toy Story | Profile </title>
        </Helmet>
      </div>
      <div className="w-fit mx-auto">Your email: {user?.email}</div>
    </div>
  );
};

export default Profile;
