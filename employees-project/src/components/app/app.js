import { Component } from 'react';

import nextId from "react-id-generator";
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor (props) {
    super (props) 
      this.state = {
        data: [
          { name: 'Oksana Melnyk', salary: 3500, increase: false, rise: false, id: 1, },
          { name: 'Paul Brams', salary: 2500, increase: false, rise: false, id: 2 },
          { name: 'Erika Martos', salary: 1500, increase: false, rise: false, id: 3 },
        ]
      }
      this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
      
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++

    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      console.log(newArr)
      return {
        data: newArr
      }
    })
  }


  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id)
    //   const old = data[index]
    //   const newItem = {...old, increase: !old.increase}
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //   return {
    //     data: newArr
    //   }
    // })
  }

  onToggleRise = (id) => {
    console.log(`Rise ${id}`)
  }

  render () {  
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
  
          />
          <EmployeesAddForm onAdd = {this.addItem}
          />
      </div>
    );
  }
}

export default App;
