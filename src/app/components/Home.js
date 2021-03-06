import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      homeLink: props.initialHomeLinkName
    };
    console.log("Constructor");
  }

  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shoudl component update", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
  }

  onResetAge() {
    this.setState({
      age: this.props.initialAge
    })
  }

  onChangeLinkName() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  render() {
    return(
      <div>
        <p>Your name is {this.props.name} and you are {this.state.age} years old.</p>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
        <hr/>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
        <hr/>
        <button onClick={() => this.onResetAge()} className="btn btn-primary">Reset my age</button>
        <hr/>
        <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
        <button onClick={() => this.onChangeLinkName()} className="btn btn-primary">Change Home Link Name</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
  initialHomeLinkName: PropTypes.string
};
