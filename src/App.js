import React from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Chat from './components/chat/chat';
import Login from './components/login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Values } from './context';

function App() {
  const [{user}, dispatch] = Values();

  console.log(user);
  return (
    <div className="app"> 
      {/* Header component */}
      <Router>
        {
          !user ? (
            <Login />
          ):
          (<>
            <Header />
            <div className="app_body">
              {/* Sidebar */}
              <Sidebar username={user?.displayName} />
              {/* React-Router -> chat Screen */}
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome!</h1>
                </Route>
              </Switch>
            </div>
            </>
          )
        }
      </Router>
    </div>
  );
}

export default App;
