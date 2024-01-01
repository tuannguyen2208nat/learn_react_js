import logo from './logo.svg';
import './App.scss';
import { MyComponent3 } from './Example/mycomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent3 />
      </header>
    </div>
  );
}

export default App;