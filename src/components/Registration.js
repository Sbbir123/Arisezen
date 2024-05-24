// Registration.js

import React from 'react';

const Registration = () => {
  return (
    <div>
      <h2>User Registration</h2>
      <form action="registration_process.php" method="POST">
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Registration;
