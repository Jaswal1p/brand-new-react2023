// import logo from './logo.svg';

import './App.css';
import { Greet } from './components/Greet';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { Parent } from './components/Parent';
import { UserGreeting } from './components/UserGreeting';

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
      <Greet name='Bobby' likesFood='Apple'>
        <a href="https://yahoo.com">Yahoo</a>
      </Greet>
      <Greet name='Jack' likesFood='Mango'>
        <button>Submit</button>
      </Greet>
      <Greet name='Kim' likesFood='Grapes'>
        <p>This is children props</p>
      </Greet>
      
      <Message />
      
      <ClickHandler />

      <Parent />

      <UserGreeting />
    </div>
  );
}

export default App;
