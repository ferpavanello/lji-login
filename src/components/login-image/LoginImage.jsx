import React, { Component } from 'react'
import treesImage from './../../path-between-trees.jpg';

function LoginImage() {
  return (
    <div className="wrap-image">
      <img src={treesImage} className="login-image" alt="logo" />
    </div>
  );
}

export default LoginImage;
