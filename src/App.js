import React, { useState } from 'react'
import './App.css';
import LoginImage from './components/login-image/LoginImage'
import FormWrapper from './components/form-wrapper/FormWrapper'

export default function App() {
  return (
    <div className="app-wrapper">
      <LoginImage />
      <FormWrapper />
    </div>
  );
}
