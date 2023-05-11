import logo from './logo.svg';
import Navbar from './Navbar';
import Home1 from './Home1';
import PostContainer from './PostContainer';
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='apphome'>
      <Home1/>
      <PostContainer/>
      </div>
    </div>
  );
}

export default App;
