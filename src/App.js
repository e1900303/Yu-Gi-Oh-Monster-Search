import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list.component';
import SearchBox from './components/search-box.component';
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
  }

  componentDidMount() {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=normal%20monster')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          // const randomIndex = Math.floor(Math.random() * (users.data.length - 10));
          return { monsters: users.data }
          // return { monsters: getRandomValues(users.data, 10) }
        },
      ))
    //   axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then((users) => this.setState({ monsters: users.data }))
    //     .then(() => {
    //       console.log(this.state)
    //     })
  }

  onSearchChange = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField: searchValue }
    })
  }


  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this;
    const filtredMonters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    return (

      <div className='App' >
        <img src='https://toppng.com/download/yet8GsuEDa1mqyhdVXdU1pX8MeQa2eFADHNVHBjWOI80CHo1yzWCmCOBz8SBbPzlfMzhWj4dIqCmtl9CPdqwhQKF7YEYmFg4xo1OcJTDRYdbfXJEwhLfP6Gzkrw3eFEWIlt4CYTCtN9QSUGT4G7x7Ly9osgq6XPrIaXLWTPA6Hqilo6ktuX8LejZjDGMa1h2f1vqvOeg/large' alt='logo' className='logo' />
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box' />
        <CardList monsters={filtredMonters} />
      </div>
    );
  };
}

export default App;
