//import logo from './logo.svg';
import React from "react";
import EmailSelector from './emailList.js'
//import './App.css';


// I got lost I have no idea where I was supose to start I dont know if im going to make it in this class.
// Im just confused I understand the idea but i dont know how to apply it

const url = "http://localhost:3001/emails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailList: [],
      selectedIndex: 0,
    };
    this.emailSelected = this.emailSelected.bind(this)
  }

   emailSelected(emailId){
    this.setState({selectedIndex: emailId})
   }

    async componentDidMount(){
      let response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
      let json = await response.json();
      let value = json.value;
      this.setState({emailList: value})
      } else {
        console.log(response.status, response.statusText);
      }
    }
 
  render(){
    return ( <div className="App">
       does this do anything
      </div>)
  }
}

export default App