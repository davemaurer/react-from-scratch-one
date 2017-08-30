import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  render() {
    return(
      <div>
        <p>Home Component</p>
        <p>Your name is {this.props.name} and you are {this.props.age} years old.</p>
        <p>User Object Name: {this.props.user.name}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => <li key={ i }>{hobby}</li>)}
          </ul>
        </div>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
};
