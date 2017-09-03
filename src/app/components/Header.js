import React from 'react';

export const Header = (props) => {
    return(
      // All of the below code, even though it "looks" like html, is actually javascript with syntactic sugar provided by react
      <nav className="navbar navbar-default">
        <div className="container">
          { /* Comment convention when inside of a JSX element */ }
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#">{props.homeLink}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
};
