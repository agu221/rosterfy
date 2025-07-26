// src/api/auth.js
import axios from "axios"
export const loginUser = async (emailOrUsername, password) => {
  const response = await axios.post('/users/login', {
    emailOrUsername,
    password,
  })

  return response.data
};

export const registerUser = async (
  username,
  firstName,
  lastName,
  dob,
  email,
  phoneNumber,
  password,
  role,
  gender
) => {
  try {
    const response = await fetch('/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Username: username,
        FirstName: firstName,
        LastName: lastName,
        DOB: dob,
        Email: email,
        PhoneNumber: phoneNumber,
        Password: password,
        Role: role,
        Gender: gender,
      }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken); // optional
    window.location.href = '/user-dashboard';
  } catch (error) {
    console.error('Registration error:', error.message);
    throw error;
  }
};
