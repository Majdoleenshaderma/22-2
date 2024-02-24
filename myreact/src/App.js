import './App.css';
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "",
      prices: ""
    }
  }

  info() {
    fetch('http://localhost:5000/getdata')
      .then(response => response.json())
      .then(json => this.setState({ data: json }))
      .catch(error => console.error(error));
  }

  products() {
    fetch('http://localhost:5000/getprice')
      .then(response => response.json())
      .then(json => this.setState({ prices: json }))
      .catch(error => console.error(error));
  }
  fetchData = () => {
    this.info();
    this.products();
  }
  render() {
    return (
      <div>
        <button onClick={this.fetchData}>fetch </button>
        <p>Name:{this.state.data.name}</p>
        <p>Age:{this.state.data.age}</p>
        <p>password:{this.state.data.password}</p>

        <div className='price'>
          <h3>products</h3>
          <p id="p1">{this.state.prices.price1}</p>
          <p id="p2">{this.state.prices.price2}</p>
          <p id="p3">{this.state.prices.price3}</p>
          <p id="p4">{this.state.prices.price4}</p>
        </div>
      </div>
    )
  }

}
export default App;