import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Profile from './pages/Profile/Profile';

function App() {
  return (
      <Router>
        <Switch>
          <Route render={ () => <Profile /> } />
        </Switch>
      </Router>
  );
}

export default App;
