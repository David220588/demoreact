import logo from '../assets/statics/logo.svg';
import '../assets/css/App.css';
import '../assets/css/Header.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hooks from '../components/Hooks';
function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
   <Hooks></Hooks>
    </div>
  );
}

export default App;
