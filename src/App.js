import './App.css';
import React, { Component } from 'react';
// import axios from 'axios';

// function getRandomValues(arr, count) {
//   var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
//   while (i-- > min) {
//     index = Math.floor((i + 1) * Math.random());
//     temp = shuffled[index];
//     shuffled[index] = shuffled[i];
//     shuffled[i] = temp;
//   }
//   return shuffled.slice(min);
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=normal%20monster')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          // const randomIndex = Math.floor(Math.random() * (users.data.length - 10));
          return { monsters: users.data }
          // return { monsters: getRandomValues(users.data, 10) }
        },
        () => {
          console.log(this.state)
        }
      ))
    //   axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then((users) => this.setState({ monsters: users.data }))
    //     .then(() => {
    //       console.log(this.state)
    //     })
  }

  onSearchChange = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchValue }
    })
  }


  render() {
    console.log('render')
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filtredMonters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className='App' >
        <input
          className='searchBox'
          type='search'
          placeholder='search monster'
          onChange={onSearchChange}
        />
        {filtredMonters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    );
  };
}

export default App;
