import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.age = props.age;
  }

  onMakeOlder() {
    this.age += 3;
  }

  render() {
    return(
      <div>
        <p>Home Component</p>
        <p>Your name is {this.props.name} and you are {this.props.age} years old.</p>
        <hr/>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
