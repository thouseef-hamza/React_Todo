import './App.css'
import { TodoWrapper } from "./components/TodoWrapper";
import NavbarExample from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarExample />
      <TodoWrapper />
    </div>
  );
}

export default App;
