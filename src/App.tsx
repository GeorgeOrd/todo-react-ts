import React from 'react';
import logo from './logo.svg';
import './App.css';

// // components
// import Greetings from './components/Greeting';
// import PendingTasks from './components/PendingTasks';
import UserList from './components/UserList'
import Counter from './components/Counter'
// // values
// const todos: string[] = [
//   'see south park',
//   'Eat cereal',
//   'Suck dick'
// ]
const users: { name: string, lastname?: string, id?: number }[] = [
  { name: 'Stewie', lastname: 'Griffin' },
  { name: 'Arnold', id: 22},
  { name: 'Bojack', lastname: 'Horseman' },
]

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Greetings name="GEORGEEEEE" />
        <PendingTasks todos={todos} />*/}
        <UserList users={users} /> 
        <Counter />
      </header>
    </div>
  );
}

