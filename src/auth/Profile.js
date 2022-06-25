import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../CSS/Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div id="profile">
        {/* <img src={user.picture} alt={user.name} /> */}
        <h2 className="profiletext">{user.name}</h2>
        <p className="profiletext">{user.email}</p>
      </div>
    )
  );
};

export default Profile;
