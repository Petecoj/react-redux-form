import React, { Component } from 'react';
import {connect} from 'react-redux'
import Snack from '../Snack/Snack'



class SnackList extends Component {

    render() {
        let snackList = this.props.snacks.map((snack, index) => {
            return (
                // <li key={index}>{snack}</li>
                <Snack snack={snack}
                        key={index}
                />
            )
        })
        return (
            <ul>
                {snackList}
            </ul>

        );
    }
}
const mapReduxStateToProps = (reduxState) =>{
    return {
      snacks: reduxState.snackReducer
    }
  }

export default connect(mapReduxStateToProps)(SnackList);
