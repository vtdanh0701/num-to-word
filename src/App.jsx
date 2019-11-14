import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input : '',
      output: ''
    }
  }
  
  getInput = (e) =>{
    this.setState({
      input : e.target.value,
    })
  }
  convert = () =>{
    let n = this.state.input
    function num(n){
      var numOutput = ["", "one", "two", "three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eigthteen","nineteen"]
      return numOutput[n]
    }
    
    function tens(n){
      if(n < 20) return num(n)
      var numOutput = ["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
      return numOutput[Math.floor(n/10)] + " " + num(n % 10)
    }
    
    function hundred(n){
      if(n<100) return tens(n)
      return tens(Math.floor(n/100)) +" " + "hundred" + " " + tens(n%100).trim()
    }
    function thousand(n){
      if(n<1000) return hundred(n);
      return hundred(Math.floor(n/1000)) + " " + "thousand" +  " " + hundred(n % 1000)
    }
    function million(n){
      if(n<1000000) return thousand(n)
      return thousand(Math.floor(n/1000000)) + " " + "million" + " " + thousand(n % 1000000)
    }
    function billion(n){
      if(n < 1000000000 ) return million(n)
      return million(Math.floor(n/1000000000)) + " " + "billion" + " " + million(n % 1000000000)
    }
    function trillion(n){
      if( n < 0){
        return "Please enter positive number"
      }
      if(n == 0){
        return "Zero"
      }
      if(n < 1000000000000) return million(n)
      return billion(Math.floor(n/1000000000000)) + " " + "trillion" + " " + billion( n % 1000000000000)
    }
    let result = trillion(n)
    this.setState({
      output: result
    })
  }

  render(){
    return(
      <div className="App">
        <div className="header">Let Convert</div>
        <div className="container">
          <input onChange={this.getInput} value={this.state.input} placeholder="Enter number here...."/>
        <button onClick={this.convert}>Convert</button><br/>
        {this.state.output}
        </div>
    </div>
    )
  };
}

export default App;
