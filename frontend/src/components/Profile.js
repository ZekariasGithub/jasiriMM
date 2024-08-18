import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>
      <h3>Name: {user.name}</h3>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default Profile;
