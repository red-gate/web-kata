import React, { Component } from 'react'

class ProductForm extends Component {
  constructor(props) {
    super(props)

    this.state = {name: "", description: ""};
  }

  submit() {
      const data = {Name: this.state.name, Description: this.state.description};
      console.log(data);
      fetch('http://localhost:1786/api/products',
      {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json;",
            "Authorization": `Bearer ${this.props.token}`
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));

      this.setState({name: "", description: ""});
  }

  render() {
    return <div>
        Name: <input type="text" value={this.state.name} onChange={e => { this.setState({name: e.target.value})}} />
        Description: <input type="text" value={this.state.description} onChange={e => { this.setState({description: e.target.value})}} />
        <button onClick={e => {this.submit()}}>Submit</button>
    </div>
  }
}

export default ProductForm