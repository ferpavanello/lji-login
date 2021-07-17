import './App.css';
import LoginImage from './components/login-image/LoginImage'
import LoginForm from './components/login-form/LoginForm'

export default function App() {
  return (
    <div className="login-wrapper">
      <LoginImage />
      <LoginForm />
    </div>
  );
}
