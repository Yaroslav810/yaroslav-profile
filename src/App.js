import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Profile from './pages/Profile/Profile'
import NotFound from './pages/NotFound/NotFound'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={ () => <Profile /> } />

                <Route render={ () => <NotFound /> } />
            </Switch>
        </Router>
    )
}

export default App
