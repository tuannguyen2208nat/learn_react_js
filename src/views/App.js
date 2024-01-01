import logo from './logo.svg';
import './App.scss';
import { MyComponent7 } from './Example/mycomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent7 />
      </header>
    </div>
  );
}

export default App;