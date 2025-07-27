// src/api/auth.js
import axios from "axios"
import api from "./api"
export const loginUser = async (emailOrUsername, password) => {
  const response = await api.post('/users/login', {
    emailOrUsername,
    password,
  })

  return response.data
};

export const registerUser = async (formData) => {
  const {
    username,
    firstName,
    lastName,
    dob,
    email,
    phone,
    password,
    role,
    gender
  } = formData;
  const payload = {
    Username: username,
    FirstName: firstName,
    LastName: lastName,
    DOB: dob,
    Email: email,
    PhoneNumber: phone,
    Password: password,
    Role: role,
    Gender: gender,
  };

  const { data } = await api.post('/users/register', payload, { timeout: 5000 });
  localStorage.setItem('accessToken', data.accessToken); // optional
  window.location.href = '/';
  return data;
};
