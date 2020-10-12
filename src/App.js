import React from 'react';
import './styles/App.scss';
import Navbar from './components/layout/Navbar'
import Student from './components/students/Student';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Students from './components/students/Students';
import StudentForm from './components/students/StudentForm';
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Login from './components/pages/Login';
import PrivateRoute from "./components/routes/PrivateRoute";


function App() {
  return (
    <Provider store={store}>
       <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <div className="App">
         
          <PrivateRoute component = {Navbar} />
            <Switch>
              <PrivateRoute exact path='/' component={Student} />
              <PrivateRoute exact path='/student/:id' component={Students} />
              <PrivateRoute exact path='/studentForm/:id?' component={StudentForm} />
              <Route exact path='/login' component={Login} />
            
            </Switch>
          </div>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
