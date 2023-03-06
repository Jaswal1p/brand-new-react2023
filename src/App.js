// import logo from './logo.svg';

import './App.css';
import { Greet } from './components/Greet';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { Parent } from './components/Parent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { Stylesheet } from './components/Stylesheet';
import { Inline } from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import { Form } from './components/Form';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

import NAMES from './components/data.json';
import { useState } from 'react';

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

  const [query, setQuery] = useState('');
  
  const changeHandler = (e) => {
    setQuery(e.target.value);
  }
  const filteredNames = NAMES.filter(item => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  })

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

      <NameList />

      <Stylesheet />

      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>

      <Form />

      < PostList />

      <PostForm />

      <input type="text" value={query} onChange={changeHandler} />
      {
        filteredNames.map((item) => (
          <p key={item.id}>
            {item.first_name} {item.last_name}
          </p>
        ))
      }
    </div>
  );
}

export default App;
