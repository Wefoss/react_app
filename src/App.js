import "./App.css";
import SayHi from "./components/SayComponent";
import {Component } from "react";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isIdSort: true,
      isLetterSort: true,
      users: [
        { fname: "Arya", id: 1 },
        { fname: "John", id: 2 },
        { fname: "Dog", id: 3 },
        { fname: "Davos", id: 4 },
        { fname: "Dayneris stormborn", id: 5 },
        { fname: "Thirion", id: 6 },
      ],
    };
  }

  usersSort =(str) => {
    const {isIdSort, isLetterSort, users} = this.state;
    const copyUsers = JSON.parse(JSON.stringify(users))
    str === 'letter' ? copyUsers.sort((a, b) =>isLetterSort ? b.fname.localeCompare(a.fname) : a.fname.localeCompare(b.fname)) : copyUsers.sort((a, b) =>isIdSort ? b.id-a.id : a.id-b.id )
    this.setState({
      isIdSort: str ==='id' ? !isIdSort : isIdSort,
      isLetterSort: str ==='letter' ? !isLetterSort : isLetterSort,
      users: copyUsers
    })
  }

  render() {
    const {users, isLetterSort, isIdSort} = this.state;
    return (
      <> 
      <button onClick={() => this.usersSort('letter')}>{isLetterSort ? 'sort letters' : 'go back'}</button>
      <button onClick={() => this.usersSort('id')}>{isIdSort ? 'sort id' : 'go back'}</button>
      <ul>
      {users.map(({fname, id}) => <li key={id}> <SayHi key={id} name={fname} /> </li>)}
     </ul>
     </>
      
    )
  }
}

export default App;