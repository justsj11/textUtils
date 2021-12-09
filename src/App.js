import './App.css';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Textutils" aboutTheProduct="About Text Utils"/>
    <TextForm heading="Enter Text to analyze!"/>
    
    </>
  );
}

export default App;
