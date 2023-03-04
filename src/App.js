// import logo from './logo.svg';

import './App.css';
import { Greet } from './components/Greet';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello React World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



function App() {
  return (
    <div className="App">
      <Greet name='Bobby' likesFood='Apple'></Greet>
      <Greet name='Jack' likesFood='Mango'></Greet>
      <Greet name='Kim' likesFood='Grapes'></Greet>
    </div>
  );
}

export default App;
