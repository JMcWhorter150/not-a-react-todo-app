import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
      done: []
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input 
            onChange={this._updateText} 
            value={this.state.text}
            placeholder="Type something here!"
          />
        </form>
        <div>
    {this.state.items.map((item, i) => {
      return (
        <div key={i}>
        <input type="checkbox" onChange={() => this._storeDone(i)}></input>
        <p onClick={() => {this._deleteText(i)}}>{item}</p>
        </div>
      );
    })}
        </div>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    let item = this.state.text;
    this.state.text = "";
    let newItems = [...this.state.items];
    newItems.push(item);
    this.setState({
      items: newItems
    })
  }

  _updateText = (event) => {
    // console.log(event.target.value);
    this.setState({
      text: event.target.value
    })
  }

  _deleteText = (index) => {
    const newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({
      items: newItems
    })
  }

  _storeDone = (i) => {
    console.log('storing that the item was completed');
    let item = this.state.items[i];
    let newDone = [...this.state.done];
    newDone.push(item);
    this.setState({
      done: newDone
    })
  }
}

export default App;
