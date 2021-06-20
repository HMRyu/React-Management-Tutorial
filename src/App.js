import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import { Component } from 'react';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '1',
  'birthday' : '111111',
  'gender' : '1',
  'job' : '1'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '2',
  'birthday' : '222222',
  'gender' : '2',
  'job' : '2'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '3',
  'birthday' : '333333',
  'gender' : '3',
  'job' : '3'
}
]

class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
      </div>
    );
  }
}

export default App;
