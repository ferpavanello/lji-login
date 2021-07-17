import './App.css';
import LoginImage from './components/login-image/LoginImage'
import LoginForm from './components/login-form/LoginForm'

export default function App() {
  return (
    <div className="login-wrapper">
      <LoginImage />
      <div className="form-wrapper">
        <h1 className="form-header">Login to continue</h1>
        <LoginForm />
      </div>
    </div>
  );
}
