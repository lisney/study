import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Customer';

const customers =[
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'나동빈',
    'job':'학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'나동빈',
    'job':'교상'
  },
  {
    'id':1,
    'image':'https://placeimg.com/64/64/3',
    'name':'홍길동',
    'job':'서자'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {customers.map((c,i)=>(<Customer key={i} id={c.id} image={c.image} name={c.name} job={c.job}/>))}
      </header>
    </div>
  );
}

export default App;
