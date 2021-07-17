import { Grid } from '@material-ui/core'
import './App.css';
import LoginImage from './components/login-image/LoginImage'
import LoginForm from './components/login-form/LoginForm'

export default function App() {
  return (
    <Grid container>
      <LoginImage />
      <LoginForm />
    </Grid>
  );
}
