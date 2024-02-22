
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      infor: { name: "", age: "", password: "" },
      price: { price1: "", price2: "", price3: "", price4: "" }
    };
  }

  componentDidMount() {
    // Fetch data for 'infor' and 'price' from an API
    fetch('https://localhost:5000/getdata')
      .then(response => response.json())
      .then(data => {
        this.setState({ infor: data });
      })
      .catch(error => console.error('Error fetching data:', error));

    fetch('https://localhost:5000/getprice')
      .then(response => response.json())
      .then(data => {
        this.setState({ price: data });
      })
      .catch(error => console.error('Error fetching price data:', error));
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.state.infor.name}</p>
          <p>{this.state.infor.age}</p>
          <p>{this.state.infor.password}</p>
        </div>
        <div className='price'>
          <p id='prc1'>{this.state.price.price1}</p>
          <p id='prc2'>{this.state.price.price2}</p>
          <p id='prc3'>{this.state.price.price3}</p>
          <p id='prc4'>{this.state.price.price4}</p>
        </div>
      </div>
    );
  }
}

export default App;
