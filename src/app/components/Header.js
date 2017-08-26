import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      // All of the below code, even though it "looks" like html, is actually javascript with syntactic sugar provided by react
      <nav className="navbar navbar-default">
        <div className="container">
          { /* Comment convention when inside of a JSX element */ }
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
