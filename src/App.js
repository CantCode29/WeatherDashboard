import './App.css';

function App() {

  function getTest(){
    const url = 'http://localhost:4000/api/test';
    return fetch(url).then(res => res.json()).then(res => res.json());
  }

  return (
  <div className=" Big container">



  </div>
  );
}



export default App;
