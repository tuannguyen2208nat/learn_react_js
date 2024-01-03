import logo from './logo.svg';
import './App.scss';
// import { MyComponent8 } from './Example/mycomponent';
import Listodo from './Todos/Listtodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyComponent8 /> */}
        <Listodo />
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
  );
}

export default App;