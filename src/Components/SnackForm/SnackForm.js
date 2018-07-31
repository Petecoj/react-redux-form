import React, { Component } from 'react';
import {connect} from 'react-redux'


class SnackForm extends Component {
  constructor(props){
    super(props);

    this.state ={
      newSnack: ''
    }
  }
  handleAddSnack = (event) =>{
    this.setState({
      newSnack: event.target.value
    })
  }


  render() {
  
    return (
      <div className="App">
          <input type="text" onChange={this.handleAddSnack}/>
          <button onClick={()=> this.props.dispatch({type: 'ADD_SNACK', payload: this.state.newSnack})}>Add Snack</button>
      </div>
    );
  }
}

export default connect()(SnackForm);
