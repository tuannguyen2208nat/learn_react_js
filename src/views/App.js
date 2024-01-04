import logo from './logo.svg';
import './App.scss';
import { MyComponent8 } from './Example/mycomponent';
import Listodo from './Todos/Listtodo';
import Home from './Example/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Nav/Nav';

import { BrowserRouter, Switch, Route, Link, } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <Listodo />
            </Route>
            <Route path="/about">
              <MyComponent8 />
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={10}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;