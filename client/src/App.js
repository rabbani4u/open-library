import './App.css';
import axios from 'axios';


function App() {

  const getHomeApi = async ()=>{
    await axios.get('http://localhost:4000/')
  }
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p onClick = {getHomeApi}>Click Me</p>
    </div>
  );
}

export default App;
