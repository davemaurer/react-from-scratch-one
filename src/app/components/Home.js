import React from 'react';

export class Home extends React.Component {
  render() {
    return(
      <div>
        <p>Home Component</p>
        <p>Your name is {this.props.name}</p>
        <p>User Object Name: {this.props.user.name}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}
